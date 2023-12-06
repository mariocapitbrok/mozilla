// Copying accessors

const obj = {
  foo: 1,
  get bar() {
    return 2
  },
}

let copy = Object.assign({}, obj)
console.log(copy)
// { foo: 1, bar: 2 }
// The value of copy.bar is obj.bar's getter's return value.

// This is an assign function that copies full descriptors
function completeAssign(target, ...sources) {
  sources.forEach(source => {
    const descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key)
      return descriptors
    }, {})

    // By default, Object.assign copies enumerable Symbols, too
    Object.getOwnPropertySymbols(source).forEach(sym => {
      const descriptor = Object.getOwnPropertyDescriptor(source, sym)
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor
      }
    })
    Object.defineProperties(target, descriptors)
  })
  return target
}

copy1 = completeAssign({}, obj)
console.log(copy1)
// { foo:1, get bar() { return 2 } }

copy2 = { ...obj }
console.log(copy2)
