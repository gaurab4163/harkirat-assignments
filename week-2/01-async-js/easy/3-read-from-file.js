const fs = require('fs')
// import 'fs';

function expensiveFn(n) {
  let a = 0
  for (let i = 0; i < n; i++) {
    a++
  }
}

fs.readFile('read.txt', 'utf-8', function (err, data) {
  console.log(data)
})

expensiveFn(1000000000)
