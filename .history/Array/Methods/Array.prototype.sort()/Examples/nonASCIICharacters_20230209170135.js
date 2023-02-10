//For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.), strings from languages other than English, use String.prototype.localeCompare(). This function can compare those characters so they appear in the right order.

const items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair']
items.sort((a, b) => a.localeCompare(b))
console.log(items)

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
