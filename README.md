
[1]: https://secure.travis-ci.org/litejs/natural-compare-lite.png
[2]: https://travis-ci.org/litejs/natural-compare-lite
[3]: https://coveralls.io/repos/litejs/natural-compare-lite/badge.png
[4]: https://coveralls.io/r/litejs/natural-compare-lite
[5]: https://nodei.co/npm/natural-compare-lite.png
[6]: https://nodei.co/npm/natural-compare-lite/
[7]: https://ci.testling.com/litejs/natural-compare-lite.png
[8]: https://ci.testling.com/litejs/natural-compare-lite
[src]: https://raw.github.com/litejs/natural-compare-lite/master/min.natural-compare.js
[min]: https://raw.github.com/litejs/natural-compare-lite/master/natural-compare.js



Natural Compare &ndash; [![Build][1]][2] [![Coverage][3]][4]
===============

[![NPM][5]][6]

Compare strings containing a mix of letters and numbers
in the way a human being would in sort order.
This is described as a "natural ordering".

```plain
Standard sorting:   Natural order sorting:
    img1.png            img1.png
    img10.png           img2.png
    img12.png           img10.png
    img2.png            img12.png
```

String.naturalCompare returns a number indicating 
whether a reference string comes before or after or is the same 
as the given string in sort order. 
Use it with builtin sort() function.

```ChangeLog
ChangeLog
=========

  * Minor optimization (Lauri Rooden)
  * Optimize (Lauri Rooden)
  * Fix order when one side contains aditional number (Lauri Rooden)

2013-08-16 version v0.4
-----------------------

  * Add testling badge (Lauri Rooden)
  * Use Testman for tests (Lauri Rooden)
  * Fix order when just 0 is in string (Lauri Rooden)
  * Add coveralls badge (Lauri Rooden)
  * Add coveralls and nodei (Lauri Rooden)
```

Download [compressed][min] 
(310 bytes, 236 bytes gzipped)
or [uncompressed][src] source.



### Installation

- In browser

```html
<script src=min.natural-compare.js></script>
```

- In node.js: `npm install natural-compare-lite`

```javascript
require("natural-compare-lite")
```

### Usage

```javascript
// Simple case sensitive example
var a = ["z1.doc", "z10.doc", "z17.doc", "z2.doc", "z23.doc", "z3.doc"];
a.sort(String.naturalCompare);
// ["z1.doc", "z2.doc", "z3.doc", "z10.doc", "z17.doc", "z23.doc"]

// Use wrapper function for case insensitivity
a.sort(function(a, b){
  return String.naturalCompare(a.toLowerCase(), b.toLowerCase());
})

// In most cases we want to sort an array of objects
var a = [ {"street":"350 5th Ave", "room":"A-1021"}
        , {"street":"350 5th Ave", "room":"A-21046-b"} ];

// sort by street, then by room
a.sort(function(a, b){
  return String.naturalCompare(a.street, b.street) || String.naturalCompare(a.room, b.room);
})

// When text transformation is needed (eg toLowerCase()),
// it is best for performance to keep
// transformed key in that object. 
// There are no need to do text transformation
// on each comparision when sorting.
var a = [ {"make":"Audi", "model":"A6"}
        , {"make":"Kia",  "model":"Rio"} ];

// sort by make, then by model
a.map(function(car){
  car.sort_key = (car.make + " " + car.model).toLowerCase();
})
a.sort(function(a, b){
  return String.naturalCompare(a.sort_key, b.sort_key);
})
```

- Removes leading zeros so "a 1" and "a 001" are equal.
- Works well with dates in ISO format eg "Rev 2012-07-26.doc".


### Browser Support

[![browser support][7]][8]

External links
--------------

- [jsperf test](http://jsperf.com/natural-sort-2/7)
- [npmjs.org/package/natural-compare-lite](https://npmjs.org/package/natural-compare-lite)


### Licence

Copyright (c) 2012, 2013 Lauri Rooden &lt;lauri@rooden.ee&gt;  
[The MIT License](http://lauri.rooden.ee/mit-license.txt)


