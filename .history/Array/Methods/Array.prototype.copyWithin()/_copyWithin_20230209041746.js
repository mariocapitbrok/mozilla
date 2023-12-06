//The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

const array1 = ['a', 'b', 'c', 'd', 'e']

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4))
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3))
// Expected output: Array ["d", "d", "e", "d", "e"]

console.log(array1)

/*
A shallow copy is a way to duplicate an object in computer programming. It creates a new object that refers to the same objects as the original, rather than creating a completely independent copy of each of the original object's elements.

In other words, a shallow copy creates a new object with a reference to the same data, rather than creating a new copy of the data. Changes made to the original object will affect the copy, and vice versa. For this reason, shallow copies are usually only used with simple objects, such as numbers, strings, and lists, rather than more complex objects like arrays, data structures, or objects in object-oriented programming.
*/
