// Get non-enumerable properties only
// This uses the Array.prototype.filter() function to remove the enumerable keys (obtained with Object.keys()) from a list of all keys (obtained with Object.getOwnPropertyNames()) thus giving only the non-enumerable keys as output.

const target = myObject
const enumAndNonenum = Object.getOwnPropertyNames(target)
const enumOnly = new Set(Object.keys(target))
const nonenumOnly = enumAndNonenum.filter(key => !enumOnly.has(key))

console.log(nonenumOnly)
