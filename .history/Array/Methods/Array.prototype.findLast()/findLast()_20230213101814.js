//The findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

const array1 = [5, 12, 50, 130, 44]

const found = array1.findLast(element => element > 45)

console.log(found)
// Expected output: 130

/*
f you need to find:
  the first element that matches, use find().
  the index of the last matching element in the array, use findLastIndex().
  the index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
  whether a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
  if any element satisfies the provided testing function, use some().
*/
