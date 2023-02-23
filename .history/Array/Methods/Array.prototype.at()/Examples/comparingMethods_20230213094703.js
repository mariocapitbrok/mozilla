//This example compares different ways to select the penultimate (last but one) item of an Array. While all the methods shown below are valid, this example highlights the succinctness and readability of the at() method.

// Our array with items
const colors = ['red', 'green', 'blue']

// Using length property
const lengthWay = colors[colors.length - 2]
console.log(lengthWay) // 'green'

// Using slice() method. Note an array is returned
const sliceWay = colors.slice(-2, -1)
console.log(sliceWay[0]) // 'green'

// Using at() method
const atWay = colors.at(-2)
console.log(atWay) // 'green'
