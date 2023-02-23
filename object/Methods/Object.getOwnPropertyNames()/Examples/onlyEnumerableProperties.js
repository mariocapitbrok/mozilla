// If you want only the enumerable properties, see Object.keys() or use a for...in loop (note that this will also return enumerable properties found along the prototype chain for the object unless the latter is filtered with hasOwn()).

// Items on the prototype chain are not listed:

function ParentClass() {}
ParentClass.prototype.inheritedMethod = function () {}

function ChildClass() {
  this.prop = 5
  this.method = function () {}
}
ChildClass.prototype = new ParentClass()
ChildClass.prototype.prototypeMethod = function () {}

console.log(Object.getOwnPropertyNames(new ChildClass()))
// ["prop", "method"]
