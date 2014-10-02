
require("../")

var arr = ["1.001","1.002","1.010","1.02","1.1","1.3"]
require("testman").
describe ("String.naturalCompare").
	it ( "should compare strings as usual" ).
		equal( String.naturalCompare("a", "a"), 0 ).
		equal( String.naturalCompare("a", "b"), -1 ).
		equal( String.naturalCompare("b", "a"), 1 ).
		equal( String.naturalCompare("a", "aa"), -1 ).
		equal( String.naturalCompare("aa", "a"), 1 ).
		equal( String.naturalCompare("a", "ba"), -1 ).
		equal( String.naturalCompare("aa", "b"), -1 ).
		equal( String.naturalCompare("aa", "ba"), -1 ).
		equal( String.naturalCompare("ba", "a"), 1 ).
		equal( String.naturalCompare("b", "aa"), 1 ).
		equal( String.naturalCompare("ba", "aa"), 1 ).
		equal( ["a", "c", "b", "d"].sort(String.naturalCompare)+"", "a,b,c,d" ).

	it ( "should compare decimal integer substrings by their numeric value" ).
		equal( String.naturalCompare("a", "a1"), -1 ).
		equal( String.naturalCompare("a1", "a"), 1 ).
		equal( String.naturalCompare("a", "1"), 1 ).
		equal( String.naturalCompare("1", "1"), 0 ).
		equal( String.naturalCompare("2", "3"), -1 ).
		equal( String.naturalCompare("3", "2"), 1 ).
		equal( String.naturalCompare("9", "2"), 1 ).
		equal( String.naturalCompare("1", "a"), -1 ).
		equal( String.naturalCompare("a1", "a1"), 0 ).
		equal( String.naturalCompare("a1", "a2"), -1 ).
		equal( String.naturalCompare("a2", "a1"), 1 ).
		equal( String.naturalCompare("a1", "a11"), -1 ).
		equal( String.naturalCompare("a11","a12"), -1 ).
		equal( String.naturalCompare("a12","a11"), 1 ).
		equal( String.naturalCompare("a11", "a1"), 1 ).
		equal( String.naturalCompare("a1a", "a1"), 1 ).
		equal( String.naturalCompare("a1", "a1a"), -1 ).
		equal( String.naturalCompare("a1a", "a11"), -1 ).
		equal( String.naturalCompare("a11", "a1a"), 1 ).
		equal( String.naturalCompare("a11a", "a1a"), 1 ).
		equal( String.naturalCompare("a1a", "a11a"), -1 ).
	it ( "should work with 0 in string" ).
		equal( String.naturalCompare("a 0 a", "a 0 b"), -1 ).
		equal( String.naturalCompare("a 0 a", "a 00 b"), -1 ).
		equal( String.naturalCompare("a 0 b", "a 0 a"), 1 ).
	it ( "should compare positive and negative number" ).
		equal( String.naturalCompare("a 1", "a -1"), 1 ).
		equal( String.naturalCompare("a -1", "a 1"), -1 ).
		equal( String.naturalCompare("a 2", "a -1"), 1 ).
		equal( String.naturalCompare("a -1", "a 2"), -1 ).
		equal( String.naturalCompare("a 1", "a -2"), 1 ).
		equal( String.naturalCompare("a -2", "a 1"), -1 ).
		equal( String.naturalCompare("a -1", "a -1"), 0 ).
		equal( [-1,1,-2,2,-10,10,-11,11,-100,100].sort(String.naturalCompare)+"", "-100,-11,-10,-2,-1,1,2,10,11,100" ).
	it ( "should preserve leading zeros on decimal fractions.").
		equal( String.naturalCompare("1.01", "1.001"), 1 ).
		equal( String.naturalCompare("1.001", "1.01"), -1 ).
		equal(arr.sort(String.naturalCompare).join(","), "1.001,1.002,1.010,1.02,1.1,1.3").
		equal(arr.reverse().sort(String.naturalCompare).join(","), "1.001,1.002,1.010,1.02,1.1,1.3").
	it ( "should accept alphabet.").
		run(function() {
			String.alphabet = "ABDEFGHIJKLMNOPRSŠZŽTUVÕÄÖÜXYabdefghijklmnoprsšzžtuvõäöüxy"
		}).
		equal(["a", "ä", "B", "Š", "X", "A", "õ", "z", "1", "2", "9", "10"].sort(String.naturalCompare).join(""), "12910ABŠXazõä").
done()

