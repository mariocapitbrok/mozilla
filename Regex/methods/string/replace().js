// replace(): Searches a string for a regular expression match and replaces the matched text with a new string.

const regex = /foo/g
const str = 'foobarfoo'
const newStr = str.replace(regex, 'baz')
console.log(newStr) // prints "barbazbaz"

// In this example, the regular expression /foo/g matches all occurrences of the string "foo". The replace() method replaces each occurrence with the string "baz".
