


/*
* @version    1.2.0
* @date       2014-10-02
* @stability  3 - Stable
* @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
* @license    MIT License
*/


String.naturalCompare = function(a, b, alphabet) {
	alphabet = String.alphabet

	function getCode(str, pos, code) {
		code = alphabet && alphabet.indexOf(str.charAt(pos))
		return code > -1 ? code + 76 : ((code = str.charCodeAt(pos) || 0), code < 45 || code > 127) ? code  //
			: code < 46 ? 65               // -
			: code < 48 ? code - 1
			: code < 58 ? code + 18        // 0-9
			: code < 65 ? code - 11
			: code < 91 ? code + 11        // A-Z
			: code < 97 ? code - 37
			: code < 123 ? code + 5        // a-z
			: code - 63
	}

	if ((a+="") != (b+="")) for (var i, codeA, codeB = 1, posA = 0, posB = 0; codeB;) {
		codeA = getCode(a, posA++)
		codeB = getCode(b, posB++)

		if (!i && codeA < 76 && codeB < 76 && codeA > 66 && codeB > 66) {
			for (i = posA; codeA = getCode(a, posA), codeA < 76 && codeA > 65; posA++);
			codeA = +a.slice(i - 1, posA)
			for (i = posB; codeB = getCode(b, posB), codeB < 76 && codeB > 65; posB++);
			codeB = +b.slice(i - 1, posB)
		}
		i = codeA == 66 || codeB == 66

		if (codeA != codeB) return (codeA < codeB) ? -1 : 1
	}
	return 0
}



