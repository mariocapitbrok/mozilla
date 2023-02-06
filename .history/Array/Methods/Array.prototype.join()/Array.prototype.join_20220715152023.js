// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

const elements = ['Fire', 'Air', 'Water']

console.log(elements.join())
// expected output: "Fire,Air,Water"

console.log(elements.join(''))
// expected output: "FireAirWater"

console.log(elements.join('-'))
// expected output: "Fire-Air-Water"
