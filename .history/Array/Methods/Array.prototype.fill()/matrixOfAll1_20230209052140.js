//This example shows how to create a matrix of all 1, like the ones() function of Octave or MATLAB.

const arr = new Array(3)
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1) // Creating an array of size 4 and filled of 1
}
arr[0][0] = 10
console.log(arr[0][0]) // 10
console.log(arr[1][0]) // 1
console.log(arr[2][0]) // 1
