const data = ['delta', 'alpha', 'charlie', 'bravo']

const someSlowOperation = str => str[3]

const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) }
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

const result = mapped.map(v => data[v.i])

console.log(result)
