let fruits = ['Apple', 'Banana', 'Pear', 'Mango', 'Lemon', 'Aguacato', 'Grape']

const result = fruits.every(f => {
  console.log(f)
  return f
})

console.log(result)
