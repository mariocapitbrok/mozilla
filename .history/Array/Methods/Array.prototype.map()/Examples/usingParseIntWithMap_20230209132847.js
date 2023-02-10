//Inspired by this blog post: https://wirfs-brock.com/allen/posts/166

// It is common to use the callback with one argument (the element being traversed). Certain functions are also commonly used with one argument, even though they take additional optional arguments. These habits may lead to confusing behaviors.

//Consider:
const resultA = ['1', '2', '3'].map(parseInt)

console.log(resultA)
//While one might expect [1, 2, 3], the actual result is [1, NaN, NaN].

//parseInt is often used with one argument, but takes two. The first is an expression and the second is the radix to the callback function, Array.prototype.map passes 3 arguments: the element, the index, and the array.

//The third argument is ignored by parseInt—but not the second one! This is the source of possible confusion.

//Here is a concise example of the iteration steps:

// parseInt(string, radix) -> map(parseInt(value, index))
/* first iteration  (index is 0): */ parseInt('1', 0) // 1
/* second iteration (index is 1): */ parseInt('2', 1) // NaN
/* third iteration  (index is 2): */ parseInt('3', 2) // NaN

//Then let's talk about solutions.
const returnInt = element => parseInt(element, 10)

;['1', '2', '3'].map(returnInt) // [1, 2, 3]
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
;['1', '2', '3'].map(str => parseInt(str)) // [1, 2, 3]

// A simpler way to achieve the above, while avoiding the "gotcha":
;['1', '2', '3'].map(Number) // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
;['1.1', '2.2e2', '3e300'].map(Number) // [1.1, 220, 3e+300]

// For comparison, if we use parseInt() on the array above:
;['1.1', '2.2e2', '3e300'].map(str => parseInt(str)) // [1, 2, 3]

//One alternative output of the map method being called with parseInt as a parameter runs as follows:
const strings = ['10', '10', '10']
const numbers = strings.map(parseInt)

console.log(numbers)
// Actual result of [10, NaN, 2] may be unexpected based on the above description.
