//What will the following code log to the console?
const obj = {
  name: 'John Doe',
  printName: function () {
    console.log(this.name)
  },
}

obj.printName.call({ name: 'Jane Doe' })
