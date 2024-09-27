/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  if (!s.length) {
    return 0
  }

  let res = 1;
  let cur = 1
  for (let i = 1; i < s.length; i++) {
    let num = s.charCodeAt(i)
    let beforeNum = s.charCodeAt(i - 1) + 1
    if (num === beforeNum) {
      cur++
    } else {
      cur = 1
    }
    res = Math.max(res, cur)

  }
  return res
};

let r = longestContinuousSubstring('abcsdfw')
console.log(r);