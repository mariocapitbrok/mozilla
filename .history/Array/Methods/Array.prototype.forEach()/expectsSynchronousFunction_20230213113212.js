//forEach() expects a synchronous function — it does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callbacks.

const ratings = [5, 4, 5]
let sum = 0

const sumFunction = async (a, b) => a + b

ratings.forEach(async rating => {
  sum = await sumFunction(sum, rating)
})

console.log(sum)
// Naively expected output: 14
// Actual output: 0

//Beware of this!!!
