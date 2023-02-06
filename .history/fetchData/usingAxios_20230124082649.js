const axios = require('axios')

axios
  .get('http://www.example.com')
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })
