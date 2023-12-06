// Usage with null-prototype objects
// Because null-prototype objects do not inherit from Object.prototype, they do not inherit the propertyIsEnumerable() method. You must call Object.prototype.propertyIsEnumerable with the object as this instead.

const o = {
  __proto__: null,
  enumerableOwn: 'is enumerable',
}

//o.propertyIsEnumerable('enumerableOwn') // TypeError: o.propertyIsEnumerable is not a function

const result = Object.prototype.propertyIsEnumerable.call(o, 'enumerableOwn')
// true

console.log(result)

//Alternatively, you may use Object.getOwnPropertyDescriptor() instead, which also helps to distinguish between non-existent properties and actually non-enumerable properties.

const o = {
  __proto__: null,
  enumerableOwn: 'is enumerable',
}

Object.getOwnPropertyDescriptor(o, 'enumerableOwn')?.enumerable // true
Object.getOwnPropertyDescriptor(o, 'nonExistent')?.enumerable // undefined
