//values() will visit empty slots as if they are undefined.

for (const element of [, 'a'].values()) {
  console.log(element)
}
// undefined
// 'a'
