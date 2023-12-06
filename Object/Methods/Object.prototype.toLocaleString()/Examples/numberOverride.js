// Number toLocaleString() override
// Number.prototype.toLocaleString() is used to print out number displays more suitable for specific locales, e.g. with the correct separators. For example:

const testNumber = 2901234564
// "2901234564"

const deNumber = testNumber.toLocaleString('de')
// "2.901.234.564"

const frNumber = testNumber.toLocaleString('fr')
// "2 901 234 564"

const mxNumber = testNumber.toLocaleString('mx')

console.log(deNumber)
console.log(frNumber)
console.log(mxNumber)
