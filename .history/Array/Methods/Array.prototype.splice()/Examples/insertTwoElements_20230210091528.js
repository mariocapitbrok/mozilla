const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
const removed = myFish.splice(2, 0, 'drum', 'guitar')

console.log(removed)

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
