// Using the base toLocaleString() method
// The base toLocaleString() method simply calls toString().

const obj = {
  toString() {
    return 'My Object'
  },
}
console.log(obj.toLocaleString()) // "My Object"
