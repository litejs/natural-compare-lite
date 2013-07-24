#
# Makefile for building readme files from git and source.
#
#



title     = printf "\n%s\n%s\n" "$(1)" "`echo "$(1)"|tr [:print:] "$(2)=$(2)"`"
git_tags  = git describe --tags --exact-match
tag_title = NAME=`$(git_tags) $(1) 2>/dev/null` && [ -n "$$NAME" ] && DATE=`git log --format="%ci" -1 $(1)` && $(call title,$${DATE%% *} version $$NAME,-) && echo ""
git_deps  = .git/HEAD make-readme-files.mk
comments  = grep -IrinE "^[ 	]*(//|/\*|\#\#*|--+)[ 	]*($(1))" $${SRC-*} | sed -E -e "s,^([^:]*:[0-9]*):[ 	/*\#-]*$(2)(.*),  * \2 \[\1\],"



git-all: ChangeLog AUTHORS NEWS THANKS TODO

#- Make a readme files:
#- 
#-    AUTHORS         Credits
#-    THANKS          Acknowledgments
#-    ChangeLog       A detailed changelog, intended for programmers
#-    NEWS            A basic changelog, intended for users
#    INSTALL         Installation instructions
#-    COPYING/LICENSE Copyright and licensing information
#-    BUGS            Known bugs and instructions on reporting new ones
#- 


AUTHORS: $(git_deps); @{\
	printf '\nAuthors ordered by number of commits.\n\n';\
	git shortlog -sen | sed -E -e 's/[ 	]*([0-9]*)[	 ]*(.*)/  * \2 (\1)/g';\
	} | tee $@

THANKS: $(git_deps); @{\
	printf '\nThanks for acknowledgments (ordered by alphabet).\n\n';\
	$(call comments,THANKS,THANKS[: ]*) | sort;\
	} | tee $@

ChangeLog: $(git_deps); @{\
	$(call title,$@);\
	$(git_tags) HEAD >/dev/null 2>&1 || echo "";\
	git log --no-merges --pretty='tformat:%h|%d|%s (%aN)' | while IFS='|' read HASH TAG MSG; do \
		[ -n "$$TAG" ] && $(call tag_title,$$HASH);\
		echo "  * $$MSG"; \
	done; } | tee $@

NEWS: $(git_deps); @{\
	$(call title,News);\
	git tag -l v* | sort -r | while read TAG; do\
		$(call tag_title,$$TAG);\
		git cat-file tag $$TAG | tail -n+6;\
		echo '';\
	done; } | tee $@

TODO: $(git_deps)
	@printf '\nList of planned enhancements and bugs.\n\n'
	@$(call comments,TODO|FIXME|BUG(BUG)?) | sort -r

git-commit:
	git commit
	git commit --amend README.md



update-readme:: $(MAIN) package.json ChangeLog
	@awk -v L="`more +2 ChangeLog|head -15`" 'x==1&&/^```$$/{x=0} x!=1{print} /^```Change/{x=1;print L}' README.md > _tmp && mv _tmp README.md

