/*
Displaying the constructor of an object
The following example creates a constructor (Tree) and an object of that type (theTree). The example then displays the constructor property for the object theTree.
*/

function Tree(name) {
  this.name = name
}

const theTree = new Tree('Redwood')
console.log(`theTree.constructor is ${theTree.constructor}`)

// This example displays the following output:
/*
theTree.constructor is function Tree(name) {
  this.name = name;
}
*/
