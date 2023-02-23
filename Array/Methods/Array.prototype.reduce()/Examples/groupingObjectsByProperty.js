//Grouping objects by a property

const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
]

function groupBy(objectArray, property) {
  // The reduce method is used to create an object to group the items in objectArray by the value of the property argument.
  return objectArray.reduce((acc, obj) => {
    // The value of the property is used as the key for the group.
    const key = obj[property]
    // The current group is obtained from the accumulator, or an empty array if it does not exist.
    const curGroup = acc[key] ?? []
    // The current item is added to the current group, and the accumulator is returned with the updated group.
    return { ...acc, [key]: [...curGroup, obj] }
  }, {})
}

const groupedPeople = groupBy(people, 'age')
console.log(groupedPeople)
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
