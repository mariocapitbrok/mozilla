//Replace .filter().map() with .reduce()
//Using filter() then map() traverses the array twice, but you can achieve the same effect while traversing only once with reduce(), thereby being more efficient. (If you like for loops, you can filter and map while traversing once with forEach().)

const numbers = [-5, 6, 2, 0]

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2
    return [...accumulator, doubled]
  }
  return accumulator
}, [])

console.log(doubledPositiveNumbers) // [12, 4]
