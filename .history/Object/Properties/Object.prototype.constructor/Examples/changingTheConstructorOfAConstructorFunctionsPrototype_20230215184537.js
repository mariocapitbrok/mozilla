/*
Changing the constructor of a constructor function's prototype
Every constructor has a prototype property, which will become the instance's [[Prototype]] when called via the new operator. ConstructorFunction.prototype.constructor will therefore become a property on the instance's [[Prototype]], as previously demonstrated.

However, if ConstructorFunction.prototype is re-assigned, the constructor property will be lost. For example, the following is a common way to create an inheritance pattern:
*/

function Parent() {
  // …
}
Parent.prototype.parentMethod = function () {}

function Child() {
  Parent.call(this) // Make sure everything is initialized properly
}
// Pointing the [[Prototype]] of Child.prototype to Parent.prototype
Child.prototype = Object.create(Parent.prototype)
