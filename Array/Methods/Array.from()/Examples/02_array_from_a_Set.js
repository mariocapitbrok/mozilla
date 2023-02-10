const text = `
/* Array from a set */
const set = new Set(["foo", "bar", "baz", "foo"])
Array.from(set)
Ex. [ "foo", "bar", "baz" ]
`
const set = new Set(['foo', 'bar', 'baz', 'foo'])
const array = Array.from(set)

console.log(text, 'R.', array)
