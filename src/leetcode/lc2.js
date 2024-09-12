// https://leetcode.cn/problems/add-two-numbers/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  // console.log(1);
  let head = null, tail = null, carry = 0;

  while (l1 || l2) {
    var a = l1 ? l1.val : 0
    var b = l2 ? l2.val : 0

    let sum = a + b + carry
    let val = sum % 10
    carry = Math.floor(sum / 10)

    if (!head) {
      head = tail = new ListNode(val)
    } else {
      tail.next = new ListNode(val)
      tail = tail.next
    }

    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }

  if (carry > 0) {
    tail.next = new ListNode(carry)
  }

  return head
}