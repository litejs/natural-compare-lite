
require("../")


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
	it ( "should compare decimal integer substrings by their numeric value" ).
		equal( String.naturalCompare("a", "a1"), -1 ).
		equal( String.naturalCompare("a1", "a"), 1 ).
		equal( String.naturalCompare("a", "1"), 1 ).
		equal( String.naturalCompare("1", "1"), 0 ).
		equal( String.naturalCompare("2", "3"), -1 ).
		equal( String.naturalCompare("3", "2"), 1 ).
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
		equal( String.naturalCompare("a 1", "a 001"), 0 ).
		equal( String.naturalCompare("a 1", "a 002"), -1 ).
		equal( String.naturalCompare("a 2", "a 001"), 1 ).
	it ( "should work with 0 in string" ).
		equal( String.naturalCompare("a 0 a", "a 0 b"), -1 ).
		equal( String.naturalCompare("a 0 a", "a 00 b"), -1 ).
		equal( String.naturalCompare("a 00 a", "a 0 b"), -1 ).
		equal( String.naturalCompare("a 0 b", "a 0 a"), 1 ).
		equal( String.naturalCompare("a 00 b", "a 0 a"), 1 ).
	it ( "should compare positive and negative number" ).
		equal( String.naturalCompare("a 1", "a -1"), 1 ).
		equal( String.naturalCompare("a -1", "a 1"), -1 ).
		equal( String.naturalCompare("a 2", "a -1"), 1 ).
		equal( String.naturalCompare("a -1", "a 2"), -1 ).
		equal( String.naturalCompare("a 1", "a -2"), 1 ).
		equal( String.naturalCompare("a -2", "a 1"), -1 ).
		equal( String.naturalCompare("a -1", "a -1"), 0 ).
	it ( "should preserve leading zeros on decimal fractions.", { skip: "Not implemented" } ).
		equal( String.naturalCompare("1.01", "1.001"), -1 ).
		equal( String.naturalCompare("1.001", "1.01"), 1 ).
		// 1.001 < 1.002 < 1.010 < 1.02 < 1.1 < 1.3
done()

