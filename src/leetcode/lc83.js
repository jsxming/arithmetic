/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * @param {ListNode} head
 * @return {ListNode} 
 */

// val next
// let first = head
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head
  }

  let first = head
  let second = head.next


  while (second) {
    if (first.val === second.val) {
      first.next = second.next
    } else {
      first = second
    }
    second = second.next
  }

  return head
};