/**
 * @param {number[]} digits
 * @return {number[]}
 * 自己写的解法
 */
var plusOne = function (digits) {
  let len = digits.length - 1
  while (len > -1) {
    let temp = digits[len]
    if (temp !== 9) {
      digits[len] = digits[len] + 1
      return digits
    }
    digits[len--] = 0
  }
  digits[0] = 0
  digits.unshift(1)
  return digits
};

let arr = [1, 2, 3]
let res = plusOne(arr)
console.log(res);