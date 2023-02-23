// Using Object.isSealed

// Objects aren't sealed by default.
const empty = {}
Object.isSealed(empty) // false

// If you make an empty object non-extensible,
// it is vacuously sealed.
Object.preventExtensions(empty)
Object.isSealed(empty) // true

// The same is not true of a non-empty object,
// unless its properties are all non-configurable.
const hasProp = { fee: 'fie foe fum' }
Object.preventExtensions(hasProp)
Object.isSealed(hasProp) // false

// But make them all non-configurable
// and the object becomes sealed.
Object.defineProperty(hasProp, 'fee', {
  configurable: false,
})
Object.isSealed(hasProp) // true

// The easiest way to seal an object, of course,
// is Object.seal.
const sealed = {}
Object.seal(sealed)
Object.isSealed(sealed) // true

// A sealed object is, by definition, non-extensible.
Object.isExtensible(sealed) // false

// A sealed object might be frozen,
// but it doesn't have to be.
Object.isFrozen(sealed) // true
// (all properties also non-writable)

const s2 = Object.seal({ p: 3 })
Object.isFrozen(s2) // false
// ('p' is still writable)

const s3 = Object.seal({
  get p() {
    return 0
  },
})
Object.isFrozen(s3) // true
// (only configurability matters for accessor properties)
