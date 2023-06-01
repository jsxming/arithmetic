// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。


/**https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 解法1
var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1
  while (start <= end) {
    let center = Math.floor((end - start) / 2) + start
    if (nums[center] > target) {
      end = center - 1
    } else if (nums[center] < target) {
      start = center + 1
    } else {
      console.log(start, center, end);
      let s = start;
      let e = end;
      console.log(11);
      while (nums[s] < nums[center]) {
        console.log(start, center);
        s = s + 1
      }
      while (nums[e] > nums[center]) {
        // console.log(start, center);
        e = e - 1
      }
      console.log([s, e]);
      return [s, e]
    }
  }

  return [-1, -1]
};


searchRange([5, 7, 7, 8, 8, 10], 8)
// searchRange([2, 2], 2)