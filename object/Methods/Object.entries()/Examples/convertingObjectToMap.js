// Converting an Object to a Map
// The Map() constructor accepts an iterable of entries. With Object.entries, you can easily convert from Object to Map:

const obj = { foo: 'bar', baz: 42 }
const map = new Map(Object.entries(obj))
console.log(map) // Map(2) {"foo" => "bar", "baz" => 42}
