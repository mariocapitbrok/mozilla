const obj = {
  name: 'John Doe',
  printName: function () {
    console.log(this.name)
  },
}

const printName = obj.printName

const anotherObj = {
  name: 'Jane Doe',
  printName: printName,
}

obj.printName()
anotherObj.printName()
