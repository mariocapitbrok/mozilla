//Empty slots in sparse arrays are visited, and are treated the same as undefined.

// Declare array with no elements at indexes 2, 3, and 4
const array = [0, 1, , , , 5, 6]

// Shows all indexes, not just those with assigned values
array.find((value, index) => {
  console.log('Visited index ', index, ' with value ', value)
})
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6

// Shows all indexes, including deleted
array.find((value, index) => {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5])
    delete array[5]
  }
  // Element 5 is still visited even though deleted
  console.log('Visited index ', index, ' with value ', value)
})
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
