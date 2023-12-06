// Object.prototype.toLocaleString()
// The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.

const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0))

console.log(date1.toLocaleString('ar-EG'))
// Expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const number1 = 123456.789

console.log(number1.toLocaleString('de-DE'))
// Expected output: "123.456,789"
