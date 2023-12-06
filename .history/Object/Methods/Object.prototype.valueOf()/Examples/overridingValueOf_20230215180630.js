/*
Overriding valueOf for custom objects
You can create a function to be called in place of the default valueOf method. Your function should take no arguments, since it won't be passed any when called during type conversion.

For example, you can add a valueOf method to your custom class Box.
*/

class Box {
  #value
  constructor(value) {
    this.#value = value
  }
  valueOf() {
    return this.#value
  }
}

// With the preceding code in place, any time an object of type Box is used in a context where it is to be represented as a primitive value (but not specifically a string), JavaScript automatically calls the function defined in the preceding code.

const box = new Box(123)
console.log(box + 456) // 579
console.log(box == 123) // true

// An object's valueOf method is usually invoked by JavaScript, but you can invoke it yourself as follows:

box.valueOf()
