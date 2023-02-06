const ar = [1, 'ar', new Date('21 Dec 1997 14:12:00 UTC')]
const localeString = a.toLocaleString('en', { timeZone: 'UTC' })

console.log(localeString)
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
