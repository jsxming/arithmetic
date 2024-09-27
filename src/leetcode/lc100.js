/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// function eachRoot(a) {
//   let res = [a]
//   let result = []
//   while (res.length > 0) {
//     let node = res.pop()
//     result.push(node.val)
//     if (node.left) {
//       res.push(node.left)
//     }
//     if (node.right) {
//       res.push(node.right)
//     }
//   }
//   return result
// }

var isSameTree = function (p, q) {
  if (!p && !q) {
    return true
  }

  if (!q || !p) {
    return false
  }
  if (p.val !== q.val) {
    return false
  }
  return isSameTree(q.left, p.left) && isSameTree(q.right, p.right)
};

let a = {
  val: 1,
  left: {
    val: 2
  },
}
let b = {
  val: 1,
  left: null,
  right: {
    val: 2
  }
}
let r = isSameTree(a, b)
console.log(r);

console.log(eachRoot(a), eachRoot(b));