//Modifying the array during iteration

//The following example logs one, two, four.

//When the entry containing the value two is reached, the first entry of the whole array is shifted off—resulting in all remaining entries moving up one position. Because element four is now at an earlier position in the array, three will be skipped.

//forEach() does not make a copy of the array before iterating.

const words = ['one', 'two', 'three', 'four']
words.forEach(word => {
  console.log(word)
  if (word === 'two') {
    words.shift() //'one' will delete from array
  }
}) // one // two // four

console.log(words) // ['two', 'three', 'four']
