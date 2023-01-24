const text = `
Array from a string

Array.from('foo')

Expected output: array [ "f", "o", "o" ]
`

const arr = Array.from('foo')

console.log(text, arr)
