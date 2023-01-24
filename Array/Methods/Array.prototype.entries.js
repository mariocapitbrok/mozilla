// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

/* const array1 = ['a', 'b', 'c']

const iterator1 = array1.entries()

console.log(iterator1.next().value)
console.log(iterator1.next().value)
console.log(iterator1.next().value)
console.log(iterator1.next().value) */

const a = ['a', 'b', 'c']

for (const [index, element] of a.entries()) {
  console.log(index, element)
}

/* const a = ['a', 'b', 'c']

for (const entry of a.entries()) {
  console.log(entry[0], entry[1])
} */

/* const array = ['a', 'b', 'c']
const arrayEntries = array.entries()

for (const entry of arrayEntries) {
  console.log(entry)
} */
