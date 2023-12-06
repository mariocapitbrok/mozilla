const obj = {
  name: 'John Doe',
  printName: function () {
    console.log(this.name)
  },
}

const printName = obj.printName.bind({ name: 'Jane Doe' })

const anotherObj = {
  name: 'Jim Doe',
  printName: printName,
}

anotherObj.printName()
