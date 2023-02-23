// Iterating through an Object
// Using array destructuring, you can iterate through objects easily.

// Using for...of loop
const obj = { a: 5, b: 7, c: 9 }
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`) // "a 5", "b 7", "c 9"
}

// Using array methods
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`) // "a 5", "b 7", "c 9"
})
