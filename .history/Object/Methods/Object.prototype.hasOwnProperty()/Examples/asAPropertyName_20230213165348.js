// Using hasOwnProperty as a property name

// JavaScript does not protect the property name hasOwnProperty; an object that has a property with this name may return incorrect results:

const fooA = {
  hasOwnProperty() {
    return false
  },
  bar: 'Here be dragons',
}

const resultA = fooA.hasOwnProperty('bar') // re-implementation always returns false

console.log(resultA)

// The recommended way to overcome this problem is to instead use Object.hasOwn() (in browsers that support it). Other alternatives include using an external hasOwnProperty:

const foo = { bar: 'Here be dragons' }

// Use Object.hasOwn() method - recommended
Object.hasOwn(foo, 'bar') // true

// Use the hasOwnProperty property from the Object prototype
Object.prototype.hasOwnProperty.call(foo, 'bar') // true

// Use another Object's hasOwnProperty
// and call it with 'this' set to foo
;({}.hasOwnProperty.call(foo, 'bar')) // true
