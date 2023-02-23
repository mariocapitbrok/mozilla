//Warning: The array iterator object should be a one-time use object. Do not reuse it.

//The iterable returned from values() is not reusable. When next().done = true or currentIndex > length, the for...of loop ends, and further iterating it has no effect.

const arrA = ['a', 'b', 'c', 'd', 'e']
const valuesA = arrA.values()
for (const letter of valuesA) {
  console.log(letter)
}
// "a" "b" "c" "d" "e"
for (const letter of valuesA) {
  console.log(letter)
}
// undefined

//If you use a break statement to end the iteration early, the iterator can resume from the current position when continuing to iterate it.
