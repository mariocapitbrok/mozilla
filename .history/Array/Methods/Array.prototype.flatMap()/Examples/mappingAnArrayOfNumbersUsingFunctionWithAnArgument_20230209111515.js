//The following code shows how map works when a function requiring one argument is used with it. The argument will automatically be assigned from each element of the array as map loops through the original array.

const numbers = [1, 4, 9]
const doubles = numbers.map(num => num * 2)

console.log(doubles) // [2, 8, 18]
console.log(numbers) // [1, 4, 9]
