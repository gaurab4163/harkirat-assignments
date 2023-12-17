/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, n * 1000)
  })
  return p
}

// console.log(wait(2))
// wait(2).then(function (data) {
//   console.log(data)
// })

module.exports = wait
