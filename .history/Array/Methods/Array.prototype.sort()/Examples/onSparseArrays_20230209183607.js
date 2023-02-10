//Empty slots are moved to the end of the array.
console.log(['a', 'c', , 'b'].sort()) // ['a', 'b', 'c', empty]
console.log([, undefined, 'a', 'b'].sort()) // ["a", "b", undefined, empty]
