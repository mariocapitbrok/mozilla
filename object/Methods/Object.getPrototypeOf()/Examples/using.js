// Using getPrototypeOf
const proto = {}
const obj = Object.create(proto)
Object.getPrototypeOf(obj) === proto // true
