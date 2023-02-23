// Creating a shallow copy
// Whereas the Object.assign() method will only copy enumerable and own properties from a source object to a target object, you are able to use this method and Object.create() for a shallow copy between two unknown objects:

const person = {
  name: 'John',
  age: 30,
  get fullName() {
    return this.name + ' Smith'
  },
}

const shallowCopy = Object.create(
  Object.getPrototypeOf(person),
  Object.getOwnPropertyDescriptors(person)
)

console.log(shallowCopy)
