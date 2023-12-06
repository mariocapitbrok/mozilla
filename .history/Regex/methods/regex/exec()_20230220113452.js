/*
exec(): Searches a string for a regular expression match and returns an array of information about the match.
*/
const regex = /(\d+)-(\w+)/
const str = '1234-foo'
const match = regex.exec(str)
console.log(match) // prints ["1234-foo", "1234", "foo"]

/*
In this example, the regular expression /(\d+)-(\w+)/ matches a string that starts with one or more digits, followed by a hyphen, followed by one or more word characters. The exec() method returns an array containing the entire matched string ("1234-foo") and the two captured groups ("1234" and "foo").
*/

function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string)
  return new Date(year, month - 1, day)
}
console.log(getDate('1-30-2003'))
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)
