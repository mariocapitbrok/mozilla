// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

/* const logArrayElements = (element, index, array) => {
  console.log('a[' + index + '] = ' + element)
}

// Notice that index 2 is skipped, since there is no item at
// that position in the array...
;[2, 5, , 9].forEach(logArrayElements)
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9 */

/* function Counter() {
  this.sum = 0
  this.count = 0
}

Counter.prototype.add = function (array) {
  array.forEach(function countEntry(entry) {
    this.sum += entry
    ++this.count
  }, this)
}

const obj = new Counter()
obj.add([2, 5, 9])
console.log(obj.count) // 3
console.log(obj.sum) // 16 */

function Counter() {
  this.sum = 0
  this.count = 0
}

Counter.prototype.add = function (array) {
  array.forEach(entry => {
    this.sum += entry
    ++this.count
  })
}

const obj = new Counter()
obj.add([2, 5, 9])
console.log(obj.count) // 3
console.log(obj.sum) // 16
