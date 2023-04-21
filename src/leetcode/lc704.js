// 二分查找
//https://leetcode.cn/problems/binary-search/?envType=study-plan-v2&id=binary-search
var search = function (nums, target) {
  let len = nums.length
  let start = 0;
  let end = len - 1;
  while (start <= end) {
    let center = Math.floor((end - start) / 2) + start
    let res = nums[center]
    if (res === target) {
      return center
    } else if (res > target) {
      end = center - 1
    } else {
      start = center + 1
    }
  }
  return -1
};


search([1, 3, 5, 6], 2)