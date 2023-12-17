const fs = require('fs')
fs.readFile('file.txt', 'utf-8', function (err, data) {
  console.log(data)
  let response = data.replace(/\s+/g, ' ').trim()
  console.log(response)
  fs.writeFile('file.txt', response, function (err, data) {
    console.log('file is saved')
  })
})
