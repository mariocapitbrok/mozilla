const items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair']

const ascending = [...items].sort((a, b) => a.localeCompare(b))
console.log(ascending)

const descending = [...items].sort((a, b) => b.localeCompare(a))
console.log(descending)
