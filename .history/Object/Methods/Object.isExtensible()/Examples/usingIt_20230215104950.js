// Using Object.isExtensible

// New objects are extensible.
const empty = {}
Object.isExtensible(empty) // true

// They can be made un-extensible
Object.preventExtensions(empty)
Object.isExtensible(empty) // false

// Sealed objects are by definition non-extensible.
const sealed = Object.seal({})
Object.isExtensible(sealed) // false

// Frozen objects are also by definition non-extensible.
const frozen = Object.freeze({})
Object.isExtensible(frozen) // false
