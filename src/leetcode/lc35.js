// 代码根据 lc 704 改造
// https://leetcode.cn/problems/search-insert-position/
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
var search = function (nums, target) {
  let len = nums.length
  let start = 0;
  let end = len - 1;
  let lastIndex = 1;
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
    lastIndex = center
  }

  if (target > nums[lastIndex]) {
    return lastIndex + 1
  }
  return lastIndex
};


search([1, 3, 5, 6], 2)