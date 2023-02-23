//To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }]
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0
)

console.log(sum) // 6
