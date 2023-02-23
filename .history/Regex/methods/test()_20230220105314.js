// test(): Tests a string for a regular expression match and returns true or false.

const regex = /\d+/
const str1 = '123'
const str2 = 'abc'
console.log(regex.test(str1)) // prints true
console.log(regex.test(str2)) // prints false

// In this example, the regular expression /\d+/ matches one or more digits. The test() method returns true if the regular expression matches the string and false otherwise.
