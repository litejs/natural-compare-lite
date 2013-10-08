


/*
* @version  0.4.2
* @author   Lauri Rooden - https://github.com/litejs/natural-compare-lite
* @license  MIT License  - http://lauri.rooden.ee/mit-license.txt
*/



String.naturalCompare = function(a, b) {
	
	if (a != b) for (var i, ca, cb = 1, ia = 0, ib = 0; cb;) {
		ca = a.charCodeAt(ia++) || 0
		cb = b.charCodeAt(ib++) || 0

		if (ca < 58 && ca > 47 && cb < 58 && cb > 47) {
			for (i = ia - 1; ca = a.charCodeAt(ia), ca < 58 && ca > 47; ia++);
			ca = (a.slice(i, ia)|0) + 1
			for (i = ib - 1; cb = b.charCodeAt(ib), cb < 58 && cb > 47; ib++);
			cb = (b.slice(i, ib)|0) + 1
		}

		if (ca != cb) return (ca < cb) ? -1 : 1
	}
	return 0
}



