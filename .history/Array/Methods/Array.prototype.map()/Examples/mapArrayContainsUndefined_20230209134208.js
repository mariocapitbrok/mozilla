//When undefined or nothing is returned:
const numbers = [1, 2, 3, 4]
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num
  }
})

console.log(numbers)

// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]
