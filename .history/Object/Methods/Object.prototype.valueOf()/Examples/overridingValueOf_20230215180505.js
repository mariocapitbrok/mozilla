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
