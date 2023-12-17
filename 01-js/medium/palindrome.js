/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let i = 0,
    j = str.length - 1
  while (i <= j) {
    if (!(str[i].toLowerCase() >= 'a' && str[i].toLowerCase() <= 'z')) {
      i++
      continue
    } else if (!(str[j].toLowerCase() >= 'a' && str[j].toLowerCase() <= 'z')) {
      j--
      continue
    } else if (str[i].toLowerCase() === str[j].toLowerCase()) {
      i++
      j--
    } else {
      return false
    }
  }
  return true
}

module.exports = isPalindrome
