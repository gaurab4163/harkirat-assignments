setInterval(function () {
  const date = new Date()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const seconds = date.getSeconds()

  console.log(hour, ':', minute, ':', seconds)

  // logic for AM/PM
  if (hour > 12) {
    console.log(hour % 12, ':', minute, ':', seconds, 'PM')
  } else {
    console.log(hour, ':', minute, ':', seconds, 'AM')
  }
}, 1000)
