/**
 * 冒泡排序
 * 最好情况 顺序 1、2、3、4、5、6、7 T=O(N)
 * 最坏情况 逆序号：7、6、5、4、3、2、1 T=O(N平方)
 */

// import {swap} from '@/util/index'

function swap(arr:number[],i:number,k:number){
  const temp = arr[i]
  arr[i] = arr[k]
  arr[k] = temp
}

function bubbleSort(arr:number[]){
  const len = arr.length;
  for(let p = len-1;p>=0;p--){
    // 排序标识
    let isSwap = false
    for(let i =0 ; i<p ;i++){
      if( arr[i] > arr[i+1] ){
        swap(arr,i,i+1)
        isSwap =true
      }
    }
    console.log(arr)
    //如果排了一趟下来发现没有元素交换，说明已经有序了
    if(!isSwap) break
  }
  console.log('result======',arr)
}

bubbleSort([5,1,4,3,6,2])