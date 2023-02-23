/*
Pseudoclassical inheritance using Object.setPrototypeOf()
Inheritance in JS using classes.
*/
class Human1 {}
class SuperHero1 extends Human1 {}

const superMan1 = new SuperHero1()

// However, if we want to implement subclasses without using class, we can do the following:

function Human(name, level) {
  this.name = name
  this.level = level
}

function SuperHero(name, level) {
  Human.call(this, name, level)
}

Object.setPrototypeOf(SuperHero.prototype, Human.prototype)

// Set the `[[Prototype]]` of `SuperHero.prototype`
// to `Human.prototype`
// To set the prototypal inheritance chain

Human.prototype.speak = function () {
  return `${this.name} says hello.`
}

SuperHero.prototype.fly = function () {
  return `${this.name} is flying.`
}

const superMan = new SuperHero('Clark Kent', 1)

console.log(superMan.fly())
console.log(superMan.speak())
