/*
Object.prototype.valueOf()
The valueOf() method of Object converts the this value to an object. This method is meant to be overridden by derived objects for custom type conversion logic.
*/

function MyNumberType(n) {
  this.number = n
}

MyNumberType.prototype.valueOf = function () {
  return this.number
}

const object1 = new MyNumberType(4)

console.log(object1 + 3)
// Expected output: 7
