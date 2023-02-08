let fruits = ['Apple', 'Banana', 'Pear', 'Mango', 'Lemon', 'Aguacato', 'Grape']

fruits.every(f => {
  console.log(f)
  return true // needed to work.
})

//Note that we need to return a boolean value or a value that will be parsed to boolean.
