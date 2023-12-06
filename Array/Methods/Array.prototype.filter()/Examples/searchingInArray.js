//Following example uses filter() to filter array content based on search criteria.

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(el => el.toLowerCase().includes(query.toLowerCase()))
}

console.log(filterItems(fruits, 'ap')) // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')) // ['banana', 'mango', 'orange']
