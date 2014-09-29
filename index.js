


/*
* @version    1.0.0
* @date       2014-09-29
* @stability  3 - Stable
* @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
* @license    MIT License
*/



String.naturalCompare = function(a, b) {

	if (a != b) for (var i, codeA, codeB = 1, posA = 0, posB = 0; codeB;) {
		codeA = a.charCodeAt(posA++) || 0
		codeB = b.charCodeAt(posB++) || 0

		if (codeA < 58 && codeA > 47 && codeB < 58 && codeB > 47) {
			for (i = posA; codeA = a.charCodeAt(posA), codeA < 58 && codeA > 47; posA++);
			codeA = (a.slice(i - 1, posA) | 0) + 1
			for (i = posB; codeB = b.charCodeAt(posB), codeB < 58 && codeB > 47; posB++);
			codeB = (b.slice(i - 1, posB) | 0) + 1
		}

		if (codeA != codeB) return (codeA < codeB) ? -1 : 1
	}
	return 0
}



