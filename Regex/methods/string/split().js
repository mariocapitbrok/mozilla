// split(): Splits a string into an array of substrings using a regular expression to determine the positions of the splits.

const regex = /[\s,]+/
const str = 'hello, world foo bar'
const substrings = str.split(regex)
console.log(substrings) // prints ["hello", "world", "foo", "bar"]

// In this example, the regular expression /[\s,]+/ matches one or more whitespace characters or commas. The split() method splits the string at each match and returns an array of substrings.
