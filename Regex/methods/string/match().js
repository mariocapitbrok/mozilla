// match(): Searches a string for a regular expression match and returns an array of the matched text.

const regex = /\d+/g
const str = '1a2b3c4d'
const matches = str.match(regex)
console.log(matches) // prints ["1", "2", "3", "4"]

// In this example, the regular expression /\d+/g matches one or more digits (the g flag specifies global matching). The match() method returns an array containing all of the substrings that match the regular expression.
