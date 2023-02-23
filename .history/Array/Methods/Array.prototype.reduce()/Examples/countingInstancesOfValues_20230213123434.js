//Counting instances of values in an object

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0
  return {
    ...allNames,
    [name]: currCount + 1,
  }
}, {})

console.log(countedNames)
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// Note here that the initial value is an empty object: {}
