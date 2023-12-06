// Using hasOwnProperty as a property name

// JavaScript does not protect the property name hasOwnProperty; an object that has a property with this name may return incorrect results:

const foo = {
  hasOwnProperty() {
    return false
  },
  bar: 'Here be dragons',
}

foo.hasOwnProperty('bar') // re-implementation always returns false
