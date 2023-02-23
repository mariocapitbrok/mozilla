//Printing the contents of an array

/*
Note: In order to display the content of an array in the console, you can use console.table(), which prints a formatted version of the array.

The following example illustrates an alternative approach, using forEach().
*/

//The following code logs a line for each element in an array:

const logArrayElements = (element, index /*, array */) => {
  console.log(`a[${index}] = ${element}`)
}

// Notice that index 2 is skipped, since there is no item at
// that position in the array.
;[2, 5, , 9].forEach(logArrayElements)
// Logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
