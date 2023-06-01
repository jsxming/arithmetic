/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {

  if (!head || !head.next) {
    return head
  }
  let result = null
  let len = 1;
  let temp = head
  while (temp.next) {
    temp = temp.next
    len++
  }
  temp.next = head
  let num = k
  if (len < k) {
    num = k % len
  }
  let start = null;
  let idx = 0;

  let c = len - num
  let p = 0;
  while (head !== start) {
    if (idx >= c) {
      p++
      if (start === null) {
        start = head
      }
      if (result === null) {
        result = head
      }
      if (p === len) {
        head.next = null
        break
      }
    }
    if (idx < c) {
      idx++
    }
    head = head.next
  }
  return result
};
let a = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
        }
      }
    }
  }
}

let r = rotateRight(a, 2)
console.log(JSON.stringify(r), 'rr--');