//To mimic the function of the includes() method, this custom function returns true if the element exists in the array:

const fruits = ['apple', 'banana', 'mango', 'guava']

function checkAvailability(arr, val) {
  return arr.some(v => v === val)
}

checkAvailability(fruits, 'kela') // false
checkAvailability(fruits, 'banana') // true
