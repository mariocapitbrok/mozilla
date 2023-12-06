//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"

const myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
const removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')

console.log(myFish)
console.log(removed)
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
