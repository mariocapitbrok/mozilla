//Sparse arrays remain sparse after calling reverse(). Empty slots are copied over to their respective new indices as empty slots.

console.log([1, , 3].reverse()) // [3, empty, 1]
console.log([1, , 3, 4].reverse()) // [4, 3, empty, 1]
