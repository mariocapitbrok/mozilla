//The following (contrived) example updates an object's properties from each entry in the array:

class Counter {
  constructor() {
    this.sum = 0
    this.count = 0
  }
  add(array) {
    // Only function expressions will have its own this binding
    array.forEach(function countEntry(entry) {
      this.sum += entry
      ++this.count
    }, this)
  }
}

const obj = new Counter()
obj.add([2, 5, 9])
console.log(obj.count) // 3
console.log(obj.sum) // 16

//Since the thisArg parameter (this) is provided to forEach(), it is passed to callback each time it's invoked. The callback uses it as its this value.

//Note: If passing the callback function used an arrow function expression, the thisArg parameter could be omitted, since all arrow functions lexically bind the this value.
