//The compareFn can be invoked multiple times per element within the array. Depending on the compareFn's nature, this may yield a high overhead. The more work a compareFn does and the more elements there are to sort, it may be more efficient to use map() for sorting. The idea is to traverse the array once to extract the actual values used for sorting into a temporary array, sort the temporary array, and then traverse the temporary array to achieve the right order.

// the array to be sorted
const data = ['delta', 'alpha', 'charlie', 'bravo']

function someSlowOperation(str) {
  const reversed = str.split('').reverse().join('')
  return str
}

// temporary array holds objects with position and sort-value
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) }
})

// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1
  }
  if (a.value < b.value) {
    return -1
  }
  return 0
})

const result = mapped.map(v => data[v.i])

console.log(result)
