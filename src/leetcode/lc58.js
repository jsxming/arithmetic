/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let len = s.length;
  if (len === 1) {
    return len
  }
  let start = -1;
  while (len > -1) {
    if (s[len - 1] !== ' ' && start === -1) {
      start = len
      len--
      continue
    }
    if (start !== -1) {
      if (s[len - 1] === ' ' || len === 0) {
        return start - len
      }
    }
    len--
  }

};

var lengthOfLastWord2 = function (s) {
  let arr = s.split(' ')
  let len = arr.length - 1
  while (len > -1) {
    if (arr[len] !== '') {
      return arr[len].length
    }
    len--
  }
};

console.log(lengthOfLastWord2(" hello aad"), 'res9');