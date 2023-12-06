//Converting a for loop to forEach
const items = ['item1', 'item2', 'item3']
const copyItemsA = []
const copyItemsB = []

// before
for (let i = 0; i < items.length; i++) {
  copyItemsA.push(items[i])
}
console.log(copyItemsA)

// after
items.forEach(item => {
  copyItemsB.push(item)
})
console.log(copyItemsB)
