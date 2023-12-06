/*
Description
Any object (with the exception of null prototype objects) will have a constructor property on its [[Prototype]]. Objects created with literals will also have a constructor property that points to the constructor type for that object — for example, array literals create Array objects, and object literals create plain objects.
*/

const o1 = {}
o1.constructor === Object // true

const o2 = new Object()
o2.constructor === Object // true

const a1 = []
a1.constructor === Array // true

const a2 = new Array()
a2.constructor === Array // true

const n = 3
n.constructor === Number // true
