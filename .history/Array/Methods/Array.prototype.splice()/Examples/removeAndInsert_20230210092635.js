const myFish = ['angel', 'clown', 'drum', 'sturgeon']
const removed = myFish.splice(2, 1, 'trumpet')

console.log(myFish)
// myFish is ["angel", "clown", "trumpet", "sturgeon"]
console.log(removed)
// removed is ["drum"]
