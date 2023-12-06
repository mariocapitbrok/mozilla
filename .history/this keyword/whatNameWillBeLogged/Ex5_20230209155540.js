const obj = {
  name: 'John Doe',
  printName: function () {
    console.log(this.name)
  },
}

const printName = function () {
  console.log(this.name)
}

obj.printName()
printName()
