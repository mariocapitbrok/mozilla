// Arrow function
reduce((accumulator, currentValue) => {
  /* … */
})
reduce((accumulator, currentValue, currentIndex) => {
  /* … */
})
reduce((accumulator, currentValue, currentIndex, array) => {
  /* … */
})

reduce((accumulator, currentValue) => {
  /* … */
}, initialValue)
reduce((accumulator, currentValue, currentIndex) => {
  /* … */
}, initialValue)
reduce((accumulator, currentValue, currentIndex, array) => {
  /* … */
}, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function (accumulator, currentValue) {
  /* … */
})
reduce(function (accumulator, currentValue, currentIndex) {
  /* … */
})
reduce(function (accumulator, currentValue, currentIndex, array) {
  /* … */
})

reduce(function (accumulator, currentValue) {
  /* … */
}, initialValue)
reduce(function (accumulator, currentValue, currentIndex) {
  /* … */
}, initialValue)
reduce(function (accumulator, currentValue, currentIndex, array) {
  /* … */
}, initialValue)
