//Warning: The array iterator object should be a one-time use object. Do not reuse it.

//The iterable returned from values() is not reusable. When next().done = true or currentIndex > length, the for...of loop ends, and further iterating it has no effect.

const arr = ['a', 'b', 'c', 'd', 'e']
const values = arr.values()
for (const letter of values) {
  console.log(letter)
}
// "a" "b" "c" "d" "e"
for (const letter of values) {
  console.log(letter)
}
// undefined
