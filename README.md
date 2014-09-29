
[Build]:    http://img.shields.io/travis/litejs/natural-compare-lite.png
[Coverage]: http://img.shields.io/coveralls/litejs/natural-compare-lite.png
[1]: https://travis-ci.org/litejs/natural-compare-lite
[2]: https://coveralls.io/r/litejs/natural-compare-lite

[7]: https://ci.testling.com/litejs/natural-compare-lite.png
[8]: https://ci.testling.com/litejs/natural-compare-lite



    @version    1.0.0
    @date       2014-09-29
    @stability  3 - Stable


Natural Compare &ndash; [![Build][]][1] [![Coverage][]][2]
===============

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

-   [Source-code on Github](https://github.com/litejs/natural-compare-lite)
-   [Package on npm](https://npmjs.org/package/natural-compare-lite)
-   [jsperf test](http://jsperf.com/natural-sort-2/7)


Licence
-------

Copyright (c) 2012, 2014 Lauri Rooden &lt;lauri@rooden.ee&gt;  
[The MIT License](http://lauri.rooden.ee/mit-license.txt)


