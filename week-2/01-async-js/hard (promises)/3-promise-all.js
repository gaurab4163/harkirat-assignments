/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve('a')
    }, t * 1000)
  })
  return p
}

function wait2(t) {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve('b')
    }, t * 1000)
  })
  return p
}

function wait3(t) {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve('c')
    }, t * 1000)
  })
  return p
}

function calculateTime(t1, t2, t3) {
  const beforeTime = new Date().getTime()
  const p = Promise.all([wait1(t1), wait2(t2), wait3(t3)])
  return new Promise(function (resolve) {
    p.then((data) => {
      const afterTime = new Date().getTime()
      // console.log(afterTime - beforeTime)
      resolve(afterTime - beforeTime)
    })
  })
}

// calculateTime(1, 2, 3)
module.exports = calculateTime
