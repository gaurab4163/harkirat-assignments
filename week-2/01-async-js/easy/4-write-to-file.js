const fs = require('fs')
// import 'fs' // import doesn't work. SyntaxError: Cannot use import statement outside a module

const data = 'this needs to be written in file. additional textssss.'
fs.writeFile('write.txt', data, function (err, data) {
  console.log('the file has been saved')
})
