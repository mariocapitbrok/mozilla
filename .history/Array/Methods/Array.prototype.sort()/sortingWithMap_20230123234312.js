// the array to be sorted
const data = ['delta', 'alpha', 'charlie', 'bravo']

// some slow operation
const someSlowOperation = str => str[0]

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
