// reduceRight() skips missing elements in sparse arrays, but it does not skip undefined values.

console.log([1, 2, , 4].reduceRight((a, b) => a + b)) // 7
console.log([1, 2, undefined, 4].reduceRight((a, b) => a + b)) // NaN
