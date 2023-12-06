//Because values() returns an iterable iterator, you can use a for...of loop to iterate it.

const arr = ['a', 'b', 'c', 'd', 'e']
const iterator = arr.values()

for (const letter of iterator) {
  console.log(letter)
} // "a" "b" "c" "d" "e"
