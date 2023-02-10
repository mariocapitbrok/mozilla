//If a comparing function does not satisfy all of purity, stability, reflexivity, anti-symmetry, and transitivity rules, as explained in the description, the program's behavior is not well-defined.

//For example, consider this code:
const arrA = [3, 1, 4, 1, 5, 9]
const compareFnA = (a, b) => (a > b ? 1 : 0)
arrA.sort(compareFnA)

//The compareFn function here is not well-formed, because it does not satisfy anti-symmetry: if a > b, it returns 1; but by swapping a and b, it returns 0 instead of a negative value. Therefore, the resulting array will be different across engines. For example, V8 (used by Chrome, Node.js, etc.) and JavaScriptCore (used by Safari) would not sort the array at all and return [3, 1, 4, 1, 5, 9], while SpiderMonkey (used by Firefox) will return the array sorted ascendingly, as [1, 1, 3, 4, 5, 9].

//However, if the compareFn function is changed slightly so that it returns -1 or 0:
const arrB = [3, 1, 4, 1, 5, 9]
const compareFnB = (a, b) => (a > b ? -1 : 0)
arrB.sort(compareFnB)

//Then V8 and JavaScriptCore sorts it descendingly, as [9, 5, 4, 3, 1, 1], while SpiderMonkey returns it as-is: [3, 1, 4, 1, 5, 9].

//Due to this implementation inconsistency, you are always advised to make your comparator well-formed by following the five constraints: purity, stability, reflexivity, anti-symmetry, and transitivity. a > b returns 1, a < b returns -1 and a === b returns 0.
