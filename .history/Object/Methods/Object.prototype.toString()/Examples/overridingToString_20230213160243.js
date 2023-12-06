/* 
Overriding toString for custom objects
You can create a function to be called in place of the default toString() method. The toString() function you create should return a string value. If it returns an object and the method is called implicitly during type conversion, then its result is ignored and the value of a related method, valueOf(), is used instead, or a TypeError is thrown if none of these methods return a primitive.
*/

// The following code defines a Dog class.

class DogA {
  constructor(name, breed, color, sex) {
    this.name = name
    this.breed = breed
    this.color = color
    this.sex = sex
  }
}

// If you call the toString() method, either explicitly or implicitly, on an instance of Dog, it returns the default value inherited from Object:

const theDogA = new DogA('Gabby', 'Lab', 'chocolate', 'female')

const resultA = theDogA.toString() // "[object Object]"
const resultB = `${theDogA}` // "[object Object]"

console.log(resultA)
console.log(resultB)

// The following code overrides the default toString() method. This method generates a string containing the name, breed, color, and sex of the object.

class Dog {
  constructor(name, breed, color, sex) {
    this.name = name
    this.breed = breed
    this.color = color
    this.sex = sex
  }
  toString() {
    return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`
  }
}
