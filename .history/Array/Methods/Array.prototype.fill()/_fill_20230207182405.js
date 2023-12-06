//The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const array1 = [1, 2, 3]

console.log(array1.includes(2))
// Expected output: true

const pets = ['cat', 'dog', 'bat']

console.log(pets.includes('cat'))
// Expected output: true

console.log(pets.includes('at'))
// Expected output: false
