// Always display the currency for the strings and numbers in the prices array:
const prices = ['￥7', 500, 8123, 12]
const result = prices.toLocaleString('ja-JP', {
  style: 'currency',
  currency: 'JPY',
})

console.log(result)
// "￥7,￥500,￥8,123,￥12"
