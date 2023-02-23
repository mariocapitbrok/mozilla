// Checking if an Array index exists
// The elements of an Array are defined as direct properties, so you can use hasOwn() method to check whether a particular index exists:

const fruits = ['Apple', 'Banana', 'Watermelon', 'Orange']
const result1 = Object.hasOwn(fruits, 3) // true ('Orange')
const result2 = Object.hasOwn(fruits, 4) // false - not defined

console.log(result1)
console.log(result2)
