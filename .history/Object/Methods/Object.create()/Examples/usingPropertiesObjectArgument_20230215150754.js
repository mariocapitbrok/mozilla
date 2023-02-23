// Using propertiesObject argument with Object.create()
// Object.create() allows fine-tuned control over the object creation process. The object initializer syntax is, in fact, a syntax sugar of Object.create(). With Object.create(), we can create objects with a designated prototype and also some properties. Note that the second parameter maps keys to property descriptors — this means you can control each property's enumerability, configurability, etc. as well, which you can't do in object initializers.

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
