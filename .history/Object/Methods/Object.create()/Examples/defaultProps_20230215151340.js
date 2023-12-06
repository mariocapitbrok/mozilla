// By default properties are not writable, enumerable or configurable.

o.p = 24 // throws in strict mode
o.p // 42
console.log(o.p)

o.q = 12
for (const prop in o) {
  console.log(prop)
}
// 'q'

delete o.p
// false; throws in strict mode
