const arraySparse = [1, 3 /* empty */, , 7]
let numCallbackRuns = 0

arraySparse.forEach(element => {
  console.log({ element })
  numCallbackRuns++
})

console.log({ numCallbackRuns })

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }

//The callback function is not invoked for the missing value at index 2
