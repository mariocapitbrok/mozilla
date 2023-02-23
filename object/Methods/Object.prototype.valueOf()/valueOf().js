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

/*
This is a JavaScript code that defines a constructor function MyNumberType, which takes a parameter n and assigns it to an instance property number of the new object being created.

The constructor function also defines a method called valueOf() on its prototype. This method is a built-in JavaScript method that returns the primitive value of an object. In this case, it simply returns the number property of the instance.

The code then creates a new object called object1 using the MyNumberType constructor function and passing it the argument 4.

Finally, the code logs to the console the result of adding object1 and 3, using the + operator. Since object1 is an object, JavaScript will try to convert it to a primitive value before doing the addition. Since object1 has a valueOf() method, it will call this method to get its primitive value, which is 4. Therefore, the expression object1 + 3 will evaluate to 7, which is what is expected.

So the output of the console.log statement will be 7.
*/
