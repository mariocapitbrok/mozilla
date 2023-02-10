const obj = {
  name: 'John Doe',
  printName: function () {
    console.log(this.name)
  },
}

const print = obj.printName

const anotherObj = {
  name: 'Jane Doe',
  print: print,
}

anotherObj.print()
