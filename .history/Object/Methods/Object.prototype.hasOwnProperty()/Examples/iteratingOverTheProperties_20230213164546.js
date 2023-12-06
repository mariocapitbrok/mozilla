// Iterating over the properties of an object

// The following example shows how to iterate over the enumerable properties of an object without executing on inherited properties.

const buz = {
  fog: 'stack',
}

for (const name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log(`this is fog (${name}) for sure. Value: ${buz[name]}`)
  } else {
    console.log(name) // toString or something else
  }
}
