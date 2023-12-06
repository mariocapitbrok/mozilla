Array.from(arrayLike)

// Arrow function
Array.from(arrayLike, element => {
  /* … */
})
Array.from(arrayLike, (element, index) => {
  /* … */
})

// Mapping function
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

// Inline mapping function
Array.from(arrayLike, function (element) {
  /* … */
})
Array.from(arrayLike, function (element, index) {
  /* … */
})
Array.from(
  arrayLike,
  function (element) {
    /* … */
  },
  thisArg
)
Array.from(
  arrayLike,
  function (element, index) {
    /* … */
  },
  thisArg
)
