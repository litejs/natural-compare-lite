


/*
* @version  0.2.0
* @author   Lauri Rooden - https://github.com/litejs/natural-compare-lite
* @license  MIT License  - http://lauri.rooden.ee/mit-license.txt
*/



String.natural_compare = function(a, b) {
	var c, ca = 1, cb, i, ia = 0, ib = 0

	if (a != b) while (ca) {
		ca = a.charCodeAt(ia++) || 0
		cb = b.charCodeAt(ib++) || 0

		i = -1

		if (ca < 58 && ca > 47) {
			for (i = ia - 1; c = a.charCodeAt(ia), c < 58 && c > 47; ia++);
			ca = a.slice(i, ia)>>0
		}   

		if (cb < 58 && cb > 47) {
			// number always comes first
			if (i == -1) return 1
			for (i = ib - 1; c = b.charCodeAt(ib), c < 58 && c > 47; ib++);
			cb = b.slice(i, ib)>>0
		} else if (i > -1) return -1

		if (ca > cb) return 1
		if (ca < cb) return -1
	}
	return 0
}



