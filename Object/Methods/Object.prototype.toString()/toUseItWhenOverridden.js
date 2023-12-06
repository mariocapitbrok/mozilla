// To use the base Object.prototype.toString() with an object that has it overridden (or to invoke it on null or undefined), you need to call Function.prototype.call() or Function.prototype.apply() on it, passing the object you want to inspect as the first parameter (called thisArg).

const arr = [1, 2, 3]

arr.toString() // "1,2,3"
Object.prototype.toString.call(arr) // "[object Array]"

/* Object.prototype.toString() returns "[object Type]", where Type is the object type. If the object has a Symbol.toStringTag property whose value is a string, that value will be used as the Type. Many built-in objects, including Map and Symbol, have a Symbol.toStringTag. Some objects predating ES6 do not have Symbol.toStringTag, but have a special tag nonetheless. They include (the tag is the same as the type name given below):

  Array
  Function (anything whose typeof returns "function")
  Error
  Boolean
  Number
  String
  Date
  RegExp

The arguments object returns "[object Arguments]". Everything else, including user-defined classes, unless with a custom Symbol.toStringTag, will return "[object Object]".

Object.prototype.toString() invoked on null and undefined returns [object Null] and [object Undefined], respectively.*/
