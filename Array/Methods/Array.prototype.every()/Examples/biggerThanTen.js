function isBigEnough(element, index, array) {
  return element >= 10
}

const a = [12, 5, 8, 130, 44]
const b = [12, 54, 18, 130, 44]

const resultA = a.every(isBigEnough) // false
const resultB = b.every(isBigEnough) // true

console.log(resultA)
console.log(resultB)
