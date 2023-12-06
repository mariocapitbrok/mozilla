// Array toLocaleString() override
// Array.prototype.toLocaleString() is used to print array values as a string by invoking each element's toLocaleString() method and joining the results with a locale-specific separator. For example:

const testArray = [4, 7, 10]

const euroPrices = testArray.toLocaleString('fr', {
  style: 'currency',
  currency: 'EUR',
})
// "4,00 €,7,00 €,10,00 €"
