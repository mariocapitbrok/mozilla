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

/*
The constructor of instances of Child will be Parent due to Child.prototype being re-assigned.

This is usually not a big deal — the language almost never reads the constructor property of an object. The only exception is when using @@species to create new instances of a class, but such cases are rare, and you should be using the extends syntax to subclass builtins anyway.

However, ensuring that Child.prototype.constructor always points to Child itself is crucial when some caller is using constructor to access the original class from an instance. Take the following case: the object has the create() method to create itself.
*/

function Parent() {
  // …
}
function CreatedConstructor() {
  Parent.call(this)
}

CreatedConstructor.prototype = Object.create(Parent.prototype)

CreatedConstructor.prototype.create = function () {
  return new this.constructor()
}

new CreatedConstructor().create().create() // TypeError: new CreatedConstructor().create().create is undefined, since constructor === Parent

// In the example above, an exception is thrown, since the constructor links to Parent. To avoid this, just assign the necessary constructor you are going to use.

function Parent() {
  // …
}
function CreatedConstructor() {
  // …
}

CreatedConstructor.prototype = Object.create(Parent.prototype, {
  // Return original constructor to Child
  constructor: {
    value: CreatedConstructor,
    enumerable: false, // Make it non-enumerable, so it won't appear in `for...in` loop
    writable: true,
    configurable: true,
  },
})

CreatedConstructor.prototype.create = function () {
  return new this.constructor()
}

new CreatedConstructor().create().create() // it's pretty fine

/*
Note that when manually adding the constructor property, it's crucial to make the property non-enumerable, so constructor won't be visited in for...in loops — as it normally isn't.

If the code above looks like too much boilerplate, you may also consider using Object.setPrototypeOf() to manipulate the prototype chain.
*/

function Parent() {
  // …
}
function CreatedConstructor() {
  // …
}

Object.setPrototypeOf(CreatedConstructor.prototype, Parent.prototype)

CreatedConstructor.prototype.create = function () {
  return new this.constructor()
}

new CreatedConstructor().create().create() // still works without re-creating constructor property

// Object.setPrototypeOf() comes with its potential performance downsides because all previously created objects involved in the prototype chain have to be re-compiled; but if the above initialization code happens before Parent or CreatedConstructor are constructed, the effect should be minimal.

// Let's consider one more involved case.
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 } // Static member property
ParentWithStatic.getStartPosition = function () {
  return this.startPosition
}

function Child(x, y) {
  this.position = { x, y }
}

Child.prototype = Object.create(ParentWithStatic.prototype, {
  // Return original constructor to Child
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
})

Child.prototype.getOffsetByInitialPosition = function () {
  const position = this.position
  // Using this.constructor, in hope that getStartPosition exists as a static method
  const startPosition = this.constructor.getStartPosition()

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  }
}

new Child(1, 1).getOffsetByInitialPosition()
// Error: this.constructor.getStartPosition is undefined, since the
// constructor is Child, which doesn't have the getStartPosition static method

// For this example to work properly, we can reassign the Parent's static properties to Child:

// …
Object.assign(Child, ParentWithStatic) // Notice that we assign it before we create() a prototype below
Child.prototype = Object.create(ParentWithStatic.prototype, {
  // Return original constructor to Child
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
})
// …

// But even better, we can make the constructor functions themselves extend each other, as classes' extends do.

function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 } // Static member property
ParentWithStatic.getStartPosition = function () {
  return this.startPosition
}

function Child(x, y) {
  this.position = { x, y }
}

// Properly create inheritance!
Object.setPrototypeOf(Child.prototype, ParentWithStatic.prototype)
Object.setPrototypeOf(Child, ParentWithStatic)

Child.prototype.getOffsetByInitialPosition = function () {
  const position = this.position
  const startPosition = this.constructor.getStartPosition()

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  }
}

console.log(new Child(1, 1).getOffsetByInitialPosition()) // { offsetX: -1, offsetY: -1 }

/*
Again, using Object.setPrototypeOf() may have adverse performance effects, so make sure it happens immediately after the constructor declaration and before any instances are created — to avoid objects being "tainted".

Note: Manually updating or setting the constructor can lead to different and sometimes confusing consequences. To prevent this, just define the role of constructor in each specific case. In most cases, constructor is not used and reassigning it is not necessary.

*/
