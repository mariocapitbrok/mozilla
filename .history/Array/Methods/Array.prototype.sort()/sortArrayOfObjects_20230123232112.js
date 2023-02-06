const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
]

const ascending = [...items].sort(
  (a, b) => a.name.toUpperCase() - b.name.toUpperCase()
)
console.log(ascending)

const descending = [...items].sort((a, b) => b.name - a.name)
console.log(descending)
