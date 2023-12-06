// The method can be called on most JavaScript objects, because most objects descend from Object, and hence inherit its methods. For example Array is an Object, so you can use hasOwnProperty() method to check whether an index exists:

const fruits = ['Apple', 'Banana', 'Watermelon', 'Orange']
fruits.hasOwnProperty(3) // true ('Orange')
fruits.hasOwnProperty(4) // false - not defined

// The method will not be available in objects where it is reimplemented, or on objects created using Object.create(null) (as these don't inherit from Object.prototype). Examples for these cases are given in other examples.
