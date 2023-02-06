// This example uses spread syntax to push all elements from a second array into the first one.

const vegetables = ['parsnip', 'potato']
const moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
vegetables.push(...moreVegs)

console.log(vegetables) // ['parsnip', 'potato', 'celery', 'beetroot']
