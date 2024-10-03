function Person(name) {
  this.name = name
}

Person.prototype.shout = function () {
  console.log(`My name is ${this.name}`)
}

Person.prototype.walk = function () {
  ;`${this.name} is walking`
}

const pedro = new Person('Pedro')
pedro.shout()
pedro.walk('Other name')
console.log(Object.getPrototypeOf(pedro))
console.log(Object.getOwnPropertyNames(pedro))
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(pedro)))
// console.log(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(pedro)))
