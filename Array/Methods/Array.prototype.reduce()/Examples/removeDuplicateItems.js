//Remove duplicate items in an array

//Note: The same effect can be achieved with Set and Array.from() as const arrayWithNoDuplicates = Array.from(new Set(myArray)) with better performance.

const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
const myArrayWithNoDuplicates = myArray.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    return [...accumulator, currentValue]
  }
  return accumulator
}, [])

console.log(myArrayWithNoDuplicates)
