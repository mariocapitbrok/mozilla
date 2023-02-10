const arr1 = [1, 2, [3, 4]]
const result1 = arr1.flat()
console.log(result1)
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]]
const result2 = arr2.flat()
console.log(result2)
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]]
const result3 = arr3.flat(2)
console.log(result3)
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = arr4.flat(Infinity)
console.log(result4)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
