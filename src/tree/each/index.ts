import {TreeNode} from '@/tree/type';
/**
 * 前序遍历 根左右
 * 中序遍历 左根右
 * 后序遍历 左右根
 */



/**
 * 文字描述算法
 * 1、遇到一个节点，就把它压栈，并去遍历它的左子树
 * 2、当左子树遍历完，从栈顶弹出一个节点并访问它
 * 3、然后按其右指针再去中序遍历该节点的右子树
 * 
 * 非递归中序遍历 左根右
 * @param root 
 * @returns 
 */
function eachCenter(root:TreeNode|undefined){
  if(!root){
    return 
  }
  const result = [];
  const stack:TreeNode[] = [];
  while(root || stack.length>0){
    while(root){
      // 第一次访问节点
      // result.push(root?.data) //第一次遇到节点，前序遍历
      if(root.left){
        stack.push(root.left)
        root = root.left
      }
    }
    if(stack.length>0){
      const v = stack.pop()
      // 第二次遇到节点，中序遍历
      result.push(v?.data)
      root = v?.right
    }
  }
  return result
}

// console.log(Hello)
//递归 遍历
function eachCenter2(root:TreeNode|undefined){
  const res:number[] = []
  const fn = (node:TreeNode|undefined,res:number[])=>{
    if(node){
      fn(node.left,res)
      res.push(node.data)
      fn(node.right,res)
    }
  }
  fn(root,res)
  console.log(res)
  return res
}


const tree:TreeNode = {
  data:1,
  left:{
    data:2,
    left:{
      data:3,
      right:{
        data:3-1
      }
    },
  },
  right:{
    data:7,
    left:{
      data:10
    },
    right:{
      data:8,
      right:{
        data:9
      }
    }
  }
}

eachCenter2(tree)

//层序 遍历
function BfsTree(root:TreeNode|undefined){
  const queue = []
  while(root){
    queue.push(root)
    while(queue.length>0){
      const node = queue.shift()
      console.log(node)
      if(node?.left){
        queue.push(node.left)
      }
      if(node?.right){
        queue.push(node.right)
      }
    }
  }
  
}

console.log(123)