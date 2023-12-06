// The toString() method returns a string representing the object. This method is meant to be overridden by derived objects for custom type conversion logic.

function Dog(name) {
  this.name = name
}

const dog1 = new Dog('Gabby')

Dog.prototype.toString = function dogToString() {
  return `${this.name}`
}

console.log(dog1.toString())
// Expected output: "Gabby"
