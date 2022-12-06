// import { swap } from '@/util/index';
import {swap} from '../../util/index';

const cutoff = 50;

/**
 * 算法思想：选取主元，对比，小的放左边，大的放右边
 */
function Median3(arr: number[], left: number, right: number):number {
  const center = Math.floor((left + right)/ 2) ;
  if(center==0){
    console.log(right,left,center)
  }
  // console.log(center)
  if (arr[left] > arr[center]) {
    swap(arr, left, center)
  }
  if (arr[left] > arr[right]) {
    swap(arr, left, right)
  }
  if (arr[center] > arr[right]) {
    swap(arr, center, right)
  }
  // 放到 right -1，交换过后 right 一定比center大
  swap(arr, center, right - 1)
  // console.log(center)
  return arr[right - 1]
}

function sort(arr: number[], left: number, right: number) {
  // console.log(1)
  // if (cutoff <= right - left) {
    if(right-left<=1)return
    const pivot = Median3(arr, left, right)
    let start = left;
    let end = right - 1
    for (; ;) {
      while (arr[++start] < pivot) {
        //
      }
      while (arr[--end] > pivot) {
        // 
      }
      if (start < end) {
        swap(arr, start, end)
      } else {
        break
      }

    }
    swap(arr, start, right - 1)
    sort(arr, left, start - 1)
    sort(arr, start + 1, right)
  // } else {
    //小于阀值 使用其他简单排序
    // insertionSort()
  // }

}

export function quickSort(arr:number[]){
  sort(arr,0,arr.length-1)
}

const data =[2, 1, 4, 5, 0, 3, 6, 8, 7]
for(let i = 0;i<10;i++){
  data.push(Math.floor(Math.random()*100))
}
quickSort(data)
console.log(data)