let person = {
  name: 'Mario',
  age: 43,
  walk() {
    console.log('walk')
  },
}

/*
Enumerating properties in an object.
*/

/* for (let key in person) {
  console.log(key, person[key])
} */

/* for (let key of Object.keys(person)) {
  console.log(key, person[key])
} */

for (let value in person) {
  console.log(value)
}

/* for (let entry of Object.entries(person)) {
  console.log(entry);
} */

//'teeth' in person ? console.log(true): console.log(false);

/*
Cloning an object
*/

// const another = {};
// for (let key in person )
// another[key] = person[key];
// console.log(another);

// const another = Object.assign({}, person);
// console.log(another);

// const another = {...person};
// console.log(another);
