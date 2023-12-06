const TRUTHY_VALUES = [true, 'true', 1]

function getBoolean(value) {
  if (typeof value === 'string') {
    value = value.toLowerCase().trim()
  }

  return TRUTHY_VALUES.some(t => t === value)
}

getBoolean(false) // false
getBoolean('false') // false
getBoolean(1) // true
getBoolean('true') // true
