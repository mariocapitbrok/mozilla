function outer(x) {
  return function inner(y) {
    return x + y
  }
}

let addTo5 = outer(5)

// Output: 8
console.log(addTo5(3))
console.log(addTo5(5))
console.log(addTo5(10))
