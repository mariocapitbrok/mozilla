// search(): Searches a string for a regular expression match and returns the index of the first match.

const regex = /foo/
const str = 'barfoo'
const index = str.search(regex)
console.log(index) // prints 3

// In this example, the regular expression /foo/ matches the string "foo". The search() method returns the index of the first character of the first match ("f" in this case).
