//The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

const array1 = ['a', 'b', 'c']
const iterator = array1.keys()

for (const key of iterator) {
  console.log(key)
}

// Expected output: 0
// Expected output: 1
// Expected output: 2
