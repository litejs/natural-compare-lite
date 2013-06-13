process.chdir( process.argv[1].replace(/[^/]+$/, "") )

require("../natural-compare.js")


var found = 0
, failed = []
, out = 
	[ String.natural_compare("a", "a"), 0
	, String.natural_compare("a", "b"), -1
	, String.natural_compare("b", "a"), 1
	, String.natural_compare("a", "1"), 1
	, String.natural_compare("1", "1"), 0
	, String.natural_compare("1", "a"), -1

	, String.natural_compare("a", "ba"), -1
	, String.natural_compare("aa", "b"), -1
	, String.natural_compare("aa", "ba"), -1
	, String.natural_compare("ba", "a"), 1
	, String.natural_compare("b", "aa"), 1
	, String.natural_compare("ba", "aa"), 1

	, String.natural_compare("a1", "a1"), 0
	, String.natural_compare("a1", "a2"), -1
	, String.natural_compare("a2", "a1"), 1

	, String.natural_compare("a1", "a11"), -1
	, String.natural_compare("a11","a12"), -1
	, String.natural_compare("a12","a11"), 1
	, String.natural_compare("a11", "a1"), 1

	, String.natural_compare("a1a", "a1"), 1
	, String.natural_compare("a1", "a1a"), -1

	, String.natural_compare("a1a", "a11"), -1
	, String.natural_compare("a11", "a1a"), 1
	, String.natural_compare("a11a", "a1a"), 1
	, String.natural_compare("a1a", "a11a"), -1
	]

for (var i = 0, len = out.length; i < len; ) {
	found++
	if (out[i++] != out[i++]) failed.push(out[i-2] + " != " + out[i-1])
}

console.log(found + " tests found, " + failed.length + " failed.")
if (failed.length) throw failed.join("\n")

