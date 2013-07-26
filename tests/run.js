process.chdir( process.argv[1].replace(/[^/]+$/, "") )

require("../natural-compare.js")


var found = 0
, failed = []
, out = 
	[ String.naturalCompare("a", "a"), 0
	, String.naturalCompare("a", "b"), -1
	, String.naturalCompare("b", "a"), 1
	, String.naturalCompare("a", "1"), 1
	, String.naturalCompare("1", "1"), 0
	, String.naturalCompare("1", "a"), -1

	, String.naturalCompare("a", "ba"), -1
	, String.naturalCompare("aa", "b"), -1
	, String.naturalCompare("aa", "ba"), -1
	, String.naturalCompare("ba", "a"), 1
	, String.naturalCompare("b", "aa"), 1
	, String.naturalCompare("ba", "aa"), 1

	, String.naturalCompare("a1", "a1"), 0
	, String.naturalCompare("a1", "a2"), -1
	, String.naturalCompare("a2", "a1"), 1

	, String.naturalCompare("a1", "a11"), -1
	, String.naturalCompare("a11","a12"), -1
	, String.naturalCompare("a12","a11"), 1
	, String.naturalCompare("a11", "a1"), 1

	, String.naturalCompare("a1a", "a1"), 1
	, String.naturalCompare("a1", "a1a"), -1

	, String.naturalCompare("a1a", "a11"), -1
	, String.naturalCompare("a11", "a1a"), 1
	, String.naturalCompare("a11a", "a1a"), 1
	, String.naturalCompare("a1a", "a11a"), -1
	, String.naturalCompare("a 1", "a -2"), -1
	, String.naturalCompare("a 1", "a 001"), 0
	, String.naturalCompare("a 1", "a 002"), -1
	, String.naturalCompare("a 2", "a 001"), 1
	]

for (var i = 0, len = out.length; i < len; ) {
	found++
	if (out[i++] != out[i++]) failed.push(out[i-2] + " != " + out[i-1])
}

console.log(found + " tests found, " + failed.length + " failed.")
if (failed.length) throw failed.join("\n")

