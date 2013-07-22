


/*
* @version  0.3.2
* @author   Lauri Rooden - https://github.com/litejs/natural-compare-lite
* @license  MIT License  - http://lauri.rooden.ee/mit-license.txt
*/



String.naturalCompare = function(a, b) {
	
	if (a != b) for (var c, ca = 1, cb, i, ia = 0, ib = 0; ca;) {
		ca = a.charCodeAt(ia++) || 0
		cb = b.charCodeAt(ib++) || 0

		i = -1

		if (ca < 58 && ca > 47) {
			for (i = ia - 1; c = a.charCodeAt(ia), c < 58 && c > 47; ia++);
		}   

		if (cb < 58 && cb > 47) {
			// number always comes first
			if (i == -1) return 1
			ca = a.slice(i, ia)|0
			for (i = ib - 1; c = b.charCodeAt(ib), c < 58 && c > 47; ib++);
			cb = b.slice(i, ib)|0
		} else if (i > -1) return -1

		if (ca > cb) return 1
		if (ca < cb) return -1
	}
	return 0
}



