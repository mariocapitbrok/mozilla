//push and pop are intentionally generic, and we can use that to our advantage — as the following example shows.

//Note that in this example, we don't create an array to store a collection of objects. Instead, we store the collection on the object itself and use call on Array.prototype.push and Array.prototype.pop to trick those methods into thinking we're dealing with an array.

const collection = {
  length: 0,
  addElements(...elements) {
    // obj.length will be incremented automatically
    // every time an element is added.

    // Returning what push returns; that is
    // the new value of length property.
    return [].push.call(this, ...elements)
  },
  removeElement() {
    // obj.length will be decremented automatically
    // every time an element is removed.

    // Returning what pop returns; that is
    // the removed element.
    return [].pop.call(this)
  },
}

collection.addElements(10, 20, 30)
console.log(collection.length) // 3
collection.removeElement()
console.log(collection.length) // 2
