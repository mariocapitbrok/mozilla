// Custom setters and getters

// The example below shows how to implement a self-archiving object. When temperature property is set, the archive array gets a log entry.

function Archiver() {
  let temperature = null
  const archive = []

  Object.defineProperty(this, 'temperature', {
    get() {
      console.log('get!')
      return temperature
    },
    set(value) {
      temperature = value
      archive.push({ val: temperature })
    },
  })

  this.getArchive = () => archive
}

const arc = new Archiver()
arc.temperature // 'get!'
arc.temperature = 11
arc.temperature = 13
arc.getArchive() // [{ val: 11 }, { val: 13 }]

// In this example, a getter always returns the same value.

const pattern = {
  get() {
    return 'I always return this string, whatever you have assigned'
  },
  set() {
    this.myname = 'this is my name string'
  },
}

function TestDefineSetAndGet() {
  Object.defineProperty(this, 'myproperty', pattern)
}

const instance = new TestDefineSetAndGet()
instance.myproperty = 'test'
console.log(instance.myproperty)
// I always return this string, whatever you have assigned

console.log(instance.myname) // this is my name string
