/*
Chaining after a catch
It's possible to chain after a failure, i.e. a catch, which is useful to accomplish new actions even after an action failed in the chain. Read the following example:
*/
new Promise((resolve, reject) => {
  console.log('Initial')

  resolve()
})
  .then(() => {
    throw new Error('Something failed')

    console.log('Do this')
  })
  .catch(() => {
    console.error('Do that')
  })
  .then(() => {
    console.log('Do this, no matter what happened before')
  })
