function outer() {
  let counter = 0

  function inner() {
    counter++
    return counter
  }

  return inner
}

const fn = outer()
console.log(fn())
console.log(fn())
console.log(fn())
