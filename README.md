
[1]: https://raw.github.com/litejs/natural-compare-lite/master/min.natural-compare.js
[2]: https://raw.github.com/litejs/natural-compare-lite/master/natural-compare.js
[travis-img]: https://secure.travis-ci.org/litejs/natural-compare-lite.png
[travis-url]: https://travis-ci.org/litejs/natural-compare-lite
[nodei-img]: https://nodei.co/npm/natural-compare-lite.png
[nodei-url]: https://nodei.co/npm/natural-compare-lite/
[cover-img]: https://coveralls.io/repos/litejs/natural-compare-lite/badge.png
[cover-url]: https://coveralls.io/r/litejs/natural-compare-lite



Natural Compare
===============

[![Build Status][travis-img]][travis-url] 
[![Coverage Status][cover-img]][cover-url]

[![NPM][nodei-img]][nodei-url]

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

  * Use Testman for tests (Lauri Rooden)
  * Fix order when just 0 is in string (Lauri Rooden)
  * Add coveralls badge (Lauri Rooden)
  * Add coveralls and nodei (Lauri Rooden)
  * Add more tests and improve Readme (Lauri Rooden)
  * Add more examples to readme (Lauri Rooden)
  * Update readme (Lauri Rooden)
  * Add installation instruction to readme (Lauri Rooden)
  * Add version to readme (Lauri Rooden)
  * Minor optimization (Lauri Rooden)

2013-07-11 version v0.3
```

Download [compressed][1] 
(367 bytes, 258 bytes gzipped)
or [uncompressed][2] source.



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


External links
--------------

- [jsperf test](http://jsperf.com/natural-sort-2/5)
- [npmjs.org/package/natural-compare-lite](https://npmjs.org/package/natural-compare-lite)


### Licence

Copyright (c) 2012 Lauri Rooden &lt;lauri@rooden.ee&gt;  
[The MIT License](http://lauri.rooden.ee/mit-license.txt)


