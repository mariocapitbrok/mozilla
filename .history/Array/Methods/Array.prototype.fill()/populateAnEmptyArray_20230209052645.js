//Using fill() to populate an empty array

//This example shows how to populate an array, setting all elements to a specific value. The end parameter does not have to be specified.
const tempGirls = Array(5).fill('girl', 0)
//Note that the array was initially a sparse array with no assigned indices. fill() is still able to fill this array.

console.log(tempGirls)
