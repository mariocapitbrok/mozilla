// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

const e = ['Fire', 'Air', 'Water', 'Wind']

const alone = e.join() //separates by comma
const commaSeparated = e.join(', ')
const signSeparated = e.join(' + ')
const concatenated = e.join('')

console.log(alone)
console.log(commaSeparated)
console.log(signSeparated)
console.log(concatenated)
