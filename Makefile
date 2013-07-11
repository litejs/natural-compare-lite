


read_conf = $(shell sed '/"$(1)":/!d;s///;s/[ 	,"]//g' package.json)

NAME      = $(call read_conf,name)
MAIN      = $(call read_conf,main)
VERSION   = $(call read_conf,version)
ALL      := min.$(MAIN)
CUSTOM   :=



compile_output := compiled_code
define COMPILE
	@curl -s --data-urlencode 'output_info=$(compile_output)' \
		--data-urlencode 'output_format=text' \
		--data-urlencode 'js_code@$(1)' \
		'http://closure-compiler.appspot.com/compile' > $(2)
	@echo "# Compiled $(1) -> $(2) from $$(wc -c <"$(1)") to $$(wc -c <"$(2)") bytes"
endef

define TOGGLE
	# Toggle comments '$(1)' and save to $(2)
	@sed -E -e 's,//\*\* ($(1)),/* $(1),' $(MAIN) > $(2)
endef

define CUSTOM_TARGET
min.$(1).js: $(MAIN)
	$$(call TOGGLE,$(flags-$(1)),$(1).js)
	$$(call COMPILE,$(1).js,$$@)
	@rm $(1).js
endef



-include *.mk


ALL += $(foreach x,$(CUSTOM),min.$(x).js)


$(foreach x, $(CUSTOM), $(eval $(call CUSTOM_TARGET,$(x)) ))


.PHONY: test

#- Build commands are:
#- 
#-    all             Build everything
#-    test            Run tests
#- 
help:
	@sed -n "/^#- /s///p" Makefile


all: $(ALL) test update-readme
	# Setups: $(CUSTOM)


min.%.js: %.js package.json
	# target min.%.js
	@sed -i '/@version/s/[^ ]*$$/$(VERSION)/' $*.js
	$(call COMPILE,$*.js,$@)



%.error: compile_output=errors
%.error: %.js
	$(call COMPILE,$*.js,$@)
	@cat $@


update-readme: $(MAIN)
	@sed -i "/ bytes, .* gzipped/s/.*/($$(wc -c <min.$(MAIN)) bytes, $$(gzip -c min.$(MAIN) | wc -c) bytes gzipped)/" README.md

update-readme-from-source:
	@sed -e '/\/\*/,/\*\//!d' -e 's,[ /]*\*[ /]\?,,' -e 's/^@/    @/' $(MAIN) > README.md


update-tests:
	@printf "$$(cat test/html.tpl)" "$$(for file in test/*.liquid; do printf '\n\n\n<script type="text/liquid">\n%s\n</script>' "$$(cat $$file)"; done)" > test/test.html

css-docs:
	@styledocco -n "$(NAME)" css


test:
	@node tests/run.js




