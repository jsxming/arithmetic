/**给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 请你统计并返回 grid 中 负数 的数目。
 * https://leetcode.cn/problems/count-negative-numbers-in-a-sorted-matrix/
 * @param {*} grid 
 * @returns 
 */
var countNegatives = function (grid) {
  let result = 0;
  for (let m = 0; m < grid.length; m++) {
    for (let n = grid[m].length - 1; n > -1; n--) {
      let item = grid[m][n]
      console.log(item);
      if (item < 0) {
        result += 1
      } else {
        break
      }
    }
  }
  return result
};

countNegatives([
  [4, 3, 2, -1],
  [43, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
])

// countNegatives([
//   [3, 2],
//   [1, 0]
// ])