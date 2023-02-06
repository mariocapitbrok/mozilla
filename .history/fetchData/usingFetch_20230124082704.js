fetch('http://www.example.com')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
