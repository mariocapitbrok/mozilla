//In the following example, slice creates a new array, newCar, from myCar. Both include a reference to the object myHonda. When the color of myHonda is changed to purple, both arrays reflect the change.

// Using slice, create newCar from myCar.
const myHonda = {
  color: 'red',
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
}
const myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
const newCar = myCar.slice(0, 2)

console.log('myCar =', myCar)
console.log('newCar =', newCar)
console.log('myCar[0].color =', myCar[0].color)
console.log('newCar[0].color =', newCar[0].color)

// Change the color of myHonda.
myHonda.color = 'purple'
console.log('The new color of my Honda is', myHonda.color)

console.log('myCar[0].color =', myCar[0].color)
console.log('newCar[0].color =', newCar[0].color)

/*
myCar = [
  { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
  2,
  'cherry condition',
  'purchased 1997'
]
newCar = [ { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }, 2 ]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
*/
