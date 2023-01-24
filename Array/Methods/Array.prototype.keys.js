// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys

const array1 = ['a', 'b', 'c']
const iterator = array1.keys()

for (const key of iterator) {
  console.log(key)
}

// expected output: 0
// expected output: 1
// expected output: 2
