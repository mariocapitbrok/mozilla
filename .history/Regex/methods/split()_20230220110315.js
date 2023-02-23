// split(): Splits a string into an array of substrings using a regular expression to determine the positions of the splits.

const regex = /[\s,]+/
const str = 'hello, world foo bar'
const substrings = str.split(regex)
console.log(substrings) // prints ["hello", "world", "foo", "bar"]

// const regex = /[\s,]+/;
const str = 'hello, world foo bar'
const substrings = str.split(regex)
console.log(substrings) // prints ["hello", "world", "foo", "bar"]
