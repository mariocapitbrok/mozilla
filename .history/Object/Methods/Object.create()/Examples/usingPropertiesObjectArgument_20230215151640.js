// Using propertiesObject argument with Object.create()
// Object.create() allows fine-tuned control over the object creation process. The object initializer syntax is, in fact, a syntax sugar of Object.create(). With Object.create(), we can create objects with a designated prototype and also some properties. Note that the second parameter maps keys to property descriptors — this means you can control each property's enumerability, configurability, etc. as well, which you can't do in object initializers.

strict()

o = {}
// Is equivalent to:
o = Object.create(Object.prototype)

o = Object.create(Object.prototype, {
  // foo is a regular data property
  foo: {
    writable: true,
    configurable: true,
    value: 'hello',
  },
  // bar is an accessor property
  bar: {
    configurable: false,
    get() {
      return 10
    },
    set(value) {
      console.log('Setting `o.bar` to', value)
    },
  },
})

// Create a new object whose prototype is a new, empty
// object and add a single property 'p', with value 42.
o = Object.create({}, { p: { value: 42 } })

// With Object.create(), we can create an object with null as prototype. The equivalent syntax in object initializers would be the __proto__ key.

o = Object.create(null)
// Is equivalent to:
o = { __proto__: null }

// By default properties are not writable, enumerable or configurable.

o.p = 24 // throws in strict mode
o.p // 42
console.log(o.p)

o.q = 12
for (const prop in o) {
  console.log(prop)
}
// 'q'

delete o.p
// false; throws in strict mode

// To specify a property with the same attributes as in an initializer, explicitly specify writable, enumerable and configurable.

o2 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  }
)
// This is not equivalent to:
// o2 = Object.create({ p: 42 })
// which will create an object with prototype { p: 42 }
