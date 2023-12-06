const data = ['delta', 'alpha', 'charlie', 'bravo']

const someSlowOperation = str => str[4]

const mapped = data.map((w, i) => {
  return { i, value: someSlowOperation(w) }
})

mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1
  }
  if (a.value < b.value) {
    return -1
  }
  return 0
})

const result = mapped.map(w => data[w.i])

console.log(result)
