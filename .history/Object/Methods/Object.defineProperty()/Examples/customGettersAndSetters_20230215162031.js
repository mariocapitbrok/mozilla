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
