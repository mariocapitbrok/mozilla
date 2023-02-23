// Using getOwnPropertySymbols

const obj = {}
const a = Symbol('a')
const b = Symbol.for('b')

obj[a] = 'localSymbol'
obj[b] = 'globalSymbol'

const objectSymbols = Object.getOwnPropertySymbols(obj)

console.log(objectSymbols.length) // 2
console.log(objectSymbols) // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]) // Symbol(a)
console.log(objectSymbols[a])
