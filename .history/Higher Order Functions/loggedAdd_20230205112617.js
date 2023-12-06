function logResult(fn) {
  return function (...args) {
    let result = fn(...args)
    console.log(result)
    return result
  }
}

let add = (a, b) => a + b
let loggedAdd = logResult(add)

let result = loggedAdd(4, 2)
console.log(result)
// Output:
// 3
// 3
