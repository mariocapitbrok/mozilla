function f() {
  return Array.from(arguments)
}

const result = f(1, 2, 3)
console.log(result)
// [ 1, 2, 3 ]
