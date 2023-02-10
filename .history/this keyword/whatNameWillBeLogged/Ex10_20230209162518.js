const obj = {
  name: 'John Doe',
  printName: function () {
    console.log(this.name)
  },
}

const anotherObj = {
  name: 'Jane Doe',
  obj: obj,
}

anotherObj.obj.printName()
