function outerFunction(x) {
  return function innerFunction(y) {
    return x + y
  }
}

let addTo5 = outerFunction(5)

let result = addTo5(3)
// Output: 8
