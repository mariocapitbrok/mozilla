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

/* 
Note that the for...in loop only iterates enumerable items: the absence of non-enumerable properties emitted from the loop does not imply that hasOwnProperty itself is confined strictly to enumerable items (as with Object.getOwnPropertyNames()).
*/
