const getRandomInt = (min, max) => {
  min = Math.ceil(min) // inclusive
  max = Math.floor(max) // exclusive

  return Math.floor(Math.random() * (max - min) + min)
}

console.log(getRandomInt(5, 11))
