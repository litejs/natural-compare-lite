


/*
* @version    1.0.0
* @date       2014-05-14
* @stability  3 - Stable
* @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
* @license    MIT License
*/



String.naturalCompare = function(a, b) {

	if (a != b) for (var i, ca, cb = 1, ia = 0, ib = 0; cb;) {
		ca = a.charCodeAt(ia++) || 0
		cb = b.charCodeAt(ib++) || 0

		if (ca < 58 && ca > 47 && cb < 58 && cb > 47) {
			for (i = ia; ca = a.charCodeAt(ia), ca < 58 && ca > 47; ia++);
			ca = (a.slice(i - 1, ia) | 0) + 1
			for (i = ib; cb = b.charCodeAt(ib), cb < 58 && cb > 47; ib++);
			cb = (b.slice(i - 1, ib) | 0) + 1
		}

		if (ca != cb) return (ca < cb) ? -1 : 1
	}
	return 0
}



