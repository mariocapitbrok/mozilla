//entries() will visit empty slots as if they are undefined.

for (const element of [, 'a'].entries()) {
  console.log(element)
}
// [0, undefined]
// [1, 'a']
