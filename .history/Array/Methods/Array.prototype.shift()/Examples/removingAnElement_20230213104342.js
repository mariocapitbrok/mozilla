//The following code displays the myFish array before and after removing its first element. It also displays the removed element:

const myFish = ['angel', 'clown', 'mandarin', 'surgeon']

console.log('myFish before:', JSON.stringify(myFish))
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift()

console.log('myFish after:', myFish)
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element:', shifted)
// Removed this element: angel
