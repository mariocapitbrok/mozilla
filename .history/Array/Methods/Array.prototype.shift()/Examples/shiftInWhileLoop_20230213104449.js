//The shift() method is often used in condition inside while loop. In the following example every iteration will remove the next element from an array, until it is empty:

const names = ['Andrew', 'Tyrone', 'Paul', 'Maria', 'Gayatri']

while (typeof (i = names.shift()) !== 'undefined') {
  console.log(i)
}
// Andrew, Tyrone, Paul, Maria, Gayatri
