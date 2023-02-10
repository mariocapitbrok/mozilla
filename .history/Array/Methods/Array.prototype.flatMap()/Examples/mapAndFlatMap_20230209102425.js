const arr1 = [1, 2, 3, 4]

const resultA = arr1.map(x => [x * 2])
console.log(resultA)
// [[2], [4], [6], [8]]

const resultB = arr1.flatMap(x => [x * 2])
console.log(resultB)
// [2, 4, 6, 8]

// only one level is flattened
const resultC = arr1.flatMap(x => [[x * 2]])
console.log(resultC)
// [[2], [4], [6], [8]]

/*
While the above could have been achieved by using map itself, here is an example that better showcases the use of flatMap().

Let's generate a list of words from a list of sentences.
*/
const arr2 = ["it's Sunny in", '', 'California']

const resultD = arr2.map(x => x.split(' '))
console.log(resultD)
// [["it's","Sunny","in"],[""],["California"]]

const resultE = arr2.flatMap(x => x.split(' '))
console.log(resultE)
// ["it's","Sunny","in", "", "California"]

//Notice, the output list length can be different from the input list length.
