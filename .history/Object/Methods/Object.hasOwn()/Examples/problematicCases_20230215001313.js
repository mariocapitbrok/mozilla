// Problematic cases for hasOwnProperty
// This section demonstrates that hasOwn() is immune to the problems that affect hasOwnProperty. Firstly, it can be used with objects that have reimplemented hasOwnProperty():

const foo = {
  hasOwnProperty() {
    return false
  },
  bar: 'The dragons be out of office',
}

if (Object.hasOwn(foo, 'bar')) {
  console.log(foo.bar) // true - re-implementation of hasOwnProperty() does not affect Object
}
