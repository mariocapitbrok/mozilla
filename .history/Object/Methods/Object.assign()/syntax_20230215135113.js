Object.assign(target, ...sources)

/*
Parameters
  target
    The target object — what to apply the sources' properties to, which is returned after it is modified.

  sources
    The source object(s) — objects containing the properties you want to apply.

Return value
The target object.

Description
Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.

The Object.assign() method only copies enumerable and own properties from a source object to a target object. It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters. Therefore it assigns properties, versus copying or defining new properties. This may make it unsuitable for merging new properties into a prototype if the merge sources contain getters.

For copying property definitions (including their enumerability) into prototypes, use Object.getOwnPropertyDescriptor() and Object.defineProperty() instead.

Both String and Symbol properties are copied.

In case of an error, for example if a property is non-writable, a TypeError is raised, and the target object is changed if any properties are added before the error is raised.

Note: Object.assign() does not throw on null or undefined sources.
*/
