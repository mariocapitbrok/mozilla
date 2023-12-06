//push is intentionally generic, and we can use that to our advantage. Array.prototype.push can work on an object just fine, as this example shows.
//Note that we don't create an array to store a collection of objects. Instead, we store the collection on the object itself and use call on Array.prototype.push to trick the method into thinking we are dealing with an array—and it just works, thanks to the way JavaScript allows us to establish the execution context in any way we want.

const obj = {
  length: 0,

  addElem(elem) {
    // obj.length is automatically incremented
    // every time an element is added.
    ;[].push.call(this, elem)
  },
}

// Let's add some empty objects just to illustrate.
obj.addElem({})
obj.addElem({})

console.log(obj)
console.log(obj.length) // 2
