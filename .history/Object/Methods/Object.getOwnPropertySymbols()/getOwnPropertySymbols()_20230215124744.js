// Object.getOwnPropertySymbols()
// The Object.getOwnPropertySymbols() static method returns an array of all symbol properties found directly upon a given object.

const object1 = {}
const a = Symbol('a')
const b = Symbol.for('b')

object1[a] = 'localSymbol'
object1[b] = 'globalSymbol'

const objectSymbols = Object.getOwnPropertySymbols(object1)

console.log(objectSymbols)
// Expected output: [ Symbol(a), Symbol(b) ]

console.log(objectSymbols.length)
// Expected output: 2
