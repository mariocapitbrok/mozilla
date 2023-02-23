// Date toLocaleString() override
// Date.prototype.toLocaleString() is used to print out date displays more suitable for specific locales. For example:

const testDate = new Date()
// "Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

const deDate = testDate.toLocaleString('de')
// "29.5.2020, 18:04:24"

const frDate = testDate.toLocaleString('fr')
// "29/05/2020, 18:04:24"
