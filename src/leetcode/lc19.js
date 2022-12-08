/**
 * 
 * leetcode 19 删除链表的倒数第 k 个元素 
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//双指针实现，一次遍历
 const removeNthFromEnd = function(head, n) {
  let node = head;
  let i =0;
  let removeNodePreNode = head;
  while(node.next){
      node = node.next
      i+=1
      if(i>n){
          removeNodePreNode = removeNodePreNode?.next||null
      }
  }
  if(i==0){
      //链表只有一个元素
      return null
  }
  if(n==1){
      //删除的是最后一个元素
      removeNodePreNode.next =null
  }else if(n>1){
      if(i==n-1){
          //删除的是head 比如元素只有3个 n = 3,下面两行代码效果一样
        //   head = removeNodePreNode.next
          return head.next
      }else{
          removeNodePreNode.next =removeNodePreNode.next.next
      }
  }
  return head
};


const removeNthFromEnd2 = function(head, n) {
    let stack = [head]
    let node =head;
    let count = 1;
    while(node.next){
        count+=1;
        node = node.next
        stack.push(node)
    }
    if(count===n){
        return head.next
    }
    let i = n;
    while(i-->0){
        stack.pop()
    }
    if(!stack.length){
        return null
    }
 
    let preNode = stack[stack.length-1]
    preNode.next = preNode.next.next
    return head
    // if(count===1){
    //     return null
    // }
    // if(count===n-1){
    //     return head.next
    // }
    // let removeNodePreNode = stack[count-n-1]
    // removeNodePreNode.next =removeNodePreNode.next.next 
    // return head
    // return 
    // return stack[n-count]
 
    

    // let i = n+1;
    // while(i-->0){
    //     stack.pop()
    // }



}