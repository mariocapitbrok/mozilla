const arr1 = [1, 2, [3, 4]]
arr1.flat()
console.log(arr1.flat())
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]]
arr2.flat()
console.log(arr2)
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]]
arr3.flat(2)
console.log(arr3)
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
arr4.flat(Infinity)
console.log(arr4)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
