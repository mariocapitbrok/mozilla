// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin

const array1 = ['a', 'b', 'c', 'd', 'e']

// copy to index 0 the element at index 3
//console.log(array1.copyWithin(0, 3, 4))

// copy to index 1 all elements from index 3 to the end
//console.log(array1.copyWithin(1, 3))

const array2 = ['a', 'b', 'c', 'd', 'e']

const target = 2
const start = 1
const end = 2

//console.log(array2.copyWithin(target))
//console.log(array2.copyWithin(target, start))
console.log(array2.copyWithin(target, start, end))
