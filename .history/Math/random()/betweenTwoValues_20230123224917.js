function randomBetweenTwoValues(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
console.log(randomBetweenTwoValues(1, 7))
