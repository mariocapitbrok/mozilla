//The push() method adds one or more elements to the end of an array and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep']

const countA = animals.push('cows')

console.log(countA)
console.log(animals)

const countB = animals.push('chickens', 'cats', 'dogs')

console.log(countB)
console.log(animals)
