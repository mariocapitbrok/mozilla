// Get non-enumerable properties only
// This uses the Array.prototype.filter() function to remove the enumerable keys (obtained with Object.keys()) from a list of all keys (obtained with Object.getOwnPropertyNames()) thus giving only the non-enumerable keys as output.

const person = {
  name: 'John',
  age: 30,
  get fullName() {
    return this.name + ' Smith'
  },
}

// make the fullName property non-enumerable
Object.defineProperty(person, 'fullName', {
  enumerable: false,
})

const target = person
const enumAndNonenum = Object.getOwnPropertyNames(target)
const enumOnly = new Set(Object.keys(target))
const nonenumOnly = enumAndNonenum.filter(key => !enumOnly.has(key))

console.log(nonenumOnly)
