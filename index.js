


/*
* @version    1.1.0
* @date       2014-09-30
* @stability  3 - Stable
* @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
* @license    MIT License
*/



String.naturalCompare = function(a, b) {
	function getCode(str, pos, code) {
		code = str.charCodeAt(pos) || 0
		return code < 45 || code > 127 ? code
			: code < 46 ? 65
			: code < 48 ? code - 1
			: code < 58 ? code + 18
			: code < 65 ? code - 11
			: code < 91 ? code + 11
			: code < 97 ? code - 37
			: code < 123 ? code + 5
			: code - 63
	}

	if (a != b) for (var i, codeA, codeB = 1, posA = 0, posB = 0; codeB;) {
		codeA = getCode(a, posA++)
		codeB = getCode(b, posB++)

		if (codeA < 76 && codeA > 65 && codeB < 76 && codeB > 65) {
			for (i = posA; codeA = getCode(a, posA), codeA < 76 && codeA > 65; posA++);
			codeA = (a.slice(i - 1, posA) | 0) + 1
			for (i = posB; codeB = getCode(b, posB), codeB < 76 && codeB > 65; posB++);
			codeB = (b.slice(i - 1, posB) | 0) + 1
		}

		if (codeA != codeB) return (codeA < codeB) ? -1 : 1
	}
	return 0
}



