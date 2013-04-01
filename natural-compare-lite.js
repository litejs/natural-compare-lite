


/*
* @version  0.0.1
* @author   Lauri Rooden - https://github.com/litejs/natural-compare-lite
* @license  MIT License  - http://lauri.rooden.ee/mit-license.txt
*/



String.natural_compare = function(a, b) {
  var c, ca, cb, ia = 0, ib = 0

	if (a !== b) while (ca !== "") {
    ca = a.charAt( ia++ )
    cb = b.charAt( ib++ )

    if (ca > "/" && ca < ":") {
      for (;c = a.charAt(ia), c > "/" && c < ":";ia++) ca += c
      ca |= 0
    }   

    if (cb > "/" && cb < ":") {
			// number always comes first
			if (typeof ca !== "number") return 1
      for (;c = b.charAt(ib), c > "/" && c < ":";ib++) cb += c
      cb |= 0
    } else if (typeof ca === "number") return -1

    if (ca > cb) return 1
    if (ca < cb) return -1
  }
	return 0
}



