/*
 * @Description: 
 * @Autor: 小明～
 * @Date: 2023-11-07 11:01:59
 * @LastEditors: 小明～
 * @LastEditTime: 2023-11-07 11:47:21
 */
// https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0
  }
  let arr = s.split('')
  let len = arr.length;
  let result = 0;
  if (len === 1) {
    return 1
  }
  let start = 0;
  let end = 1;
  while (start < end && end < len) {
    console.log(start, end, s.slice(start, end));
    let hasValue = s.slice(start, end).indexOf(arr[end])
    console.log(hasValue);
    if (hasValue > -1) {
      let v = end - start;
      if (v > result) {
        result = v;
      }
      start += 1
    } else {
      end += 1
    }
    if (start === end && end < len) {
      end++
    }
  }
  console.log(start, end, '-----ree');
  console.log(result, '---');
  if (end - start > result) {
    return end - start
  }

  return result
};

lengthOfLongestSubstring('aab')