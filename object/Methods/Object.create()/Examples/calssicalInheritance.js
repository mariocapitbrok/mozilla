// Classical inheritance with Object.create()
// Below is an example of how to use Object.create() to achieve classical inheritance. This is for a single inheritance, which is all that JavaScript supports.

// Shape - superclass
function Shape() {
  this.x = 0
  this.y = 0
}

// superclass method
Shape.prototype.move = function (x, y) {
  this.x += x
  this.y += y
  console.info('Shape moved.')
}

// Rectangle - subclass
function Rectangle() {
  Shape.call(this) // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype, {
  // If you don't set Rectangle.prototype.constructor to Rectangle,
  // it will take the prototype.constructor of Shape (parent).
  // To avoid that, we set the prototype.constructor to Rectangle (child).
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true,
  },
})

const rect = new Rectangle()

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle) // true
console.log('Is rect an instance of Shape?', rect instanceof Shape) // true
rect.move(1, 1) // Logs 'Shape moved.'

/*
Note that there are caveats to watch out for using create(), such as re-adding the constructor property to ensure proper semantics. Although Object.create() is believed to have better performance than mutating the prototype with Object.setPrototypeOf(), the difference is in fact negligible if no instances have been created and property accesses haven't been optimized yet. In modern code, the class syntax should be preferred in any case.
*/
