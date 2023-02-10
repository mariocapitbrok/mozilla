//Remove 0 (zero) elements before index 2, and insert "drum"

const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
const removed = myFish.splice(2, 0, 'drum')

console.log(myFish)

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
