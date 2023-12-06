// Using toString() to detect object class
// toString() can be used with every object and (by default) allows you to get its class.

const toString = Object.prototype.toString

toString.call(new Date()) // [object Date]
toString.call(new String()) // [object String]
// Math has its Symbol.toStringTag
toString.call(Math) // [object Math]

toString.call(undefined) // [object Undefined]
toString.call(null) // [object Null]
