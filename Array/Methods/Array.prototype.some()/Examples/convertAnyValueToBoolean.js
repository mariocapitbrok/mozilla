const TRUTHY_VALUES = [true, 'true', 1]

function getBoolean(value) {
  if (typeof value === 'string') {
    value = value.toLowerCase().trim()
  }

  return TRUTHY_VALUES.some(t => t === value)
}

const resultA = getBoolean(false) // false
const resultB = getBoolean('false') // false
const resultC = getBoolean(1) // true
const resultD = getBoolean('true') // true

console.log(resultA)
console.log(resultB)
console.log(resultC)
console.log(resultD)
