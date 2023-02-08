const a = [1, 30, 39, 29, 10, 13]

const isBelowThreshold = n => n < 40

const result = a.every(isBelowThreshold)

console.log(result)
// Expected output: true
