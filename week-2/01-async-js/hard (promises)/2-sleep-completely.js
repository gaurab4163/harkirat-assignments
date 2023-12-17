/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  const before = new Date().getTime()
  let p = new Promise(function (resolve) {
    while (new Date().getTime() - before < milliseconds) {}
    resolve()
  })
  return p
}

// console.log(sleep(2000))
module.exports = sleep
