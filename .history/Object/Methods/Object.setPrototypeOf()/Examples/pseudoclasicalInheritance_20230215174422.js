/*
Pseudoclassical inheritance using Object.setPrototypeOf()
Inheritance in JS using classes.
*/
class Human1 {}
class SuperHero1 extends Human1 {}

const superMan1 = new SuperHero1()

// However, if we want to implement subclasses without using class, we can do the following:

function Human2(name, level) {
  this.name = name
  this.level = level
}

function SuperHero2(name, level) {
  Human2.call(this, name, level)
}

Object.setPrototypeOf(SuperHero2.prototype, Human2.prototype)

// Set the `[[Prototype]]` of `SuperHero.prototype`
// to `Human.prototype`
// To set the prototypal inheritance chain

Human2.prototype.speak = function () {
  return `${this.name} says hello.`
}

SuperHero2.prototype.fly = function () {
  return `${this.name} is flying.`
}

const superMan2 = new SuperHero2('Clark Kent', 1)

console.log(superMan.fly())
console.log(superMan.speak())

/*
The similarity between classical inheritance (with classes) and pseudoclassical inheritance (with constructors' prototype property) as done above is mentioned in Inheritance chains.

Since function constructors' prototype property is writable, you can reassign it to a new object created with Object.create() to achieve the same inheritance chain as well. There are caveats to watch out when using create(), such as remembering to re-add the constructor property.

In the example below, which also uses classes, SuperHero is made to inherit from Human without using extends by using setPrototypeOf() instead.

Warning: It is not advisable to use setPrototypeOf() instead of extends due to performance and readability reasons.
*/

class Human {}
class SuperHero {}

// Set the instance properties
Object.setPrototypeOf(SuperHero.prototype, Human.prototype)

// Hook up the static properties
Object.setPrototypeOf(SuperHero, Human)

const superMan = new SuperHero()
