<<<<<<< HEAD
import {swap} from '../../util/index';

function findMin(arr:number[],start:number,end:number):number{
  let index = start
  for(let i = start;i<end;i++){
    if(arr[i]<arr[index]){
      index = i
    }
  }
  return index
}

/**
 * 选择排序
 * 每次在数组中选择最小的元素
 * T=O n平方
 */
function selectSort(){
  const arr = [13,2,56,1,2,3,5,12,32]
  for (let index = 0; index < arr.length; index++) {
    //找到未排序元素的最小元素
    const min = findMin(arr,index,arr.length)
    //将未排序的最小的元素放在排序好的元素最后
    swap(arr,index,min)
  }
  console.log(arr);
}
selectSort()
=======
/**
 * 选择排序、每次选择最小的值
 *  o n平方
 * @param arr 
 * @returns 
 */

function findMin(arr:number[]){
  let temp = arr[0];
  let tempIdx = 0;
  arr.forEach((item,idx)=>{
    if(item < temp){
      temp = item
      tempIdx = idx
    }
  })
  return tempIdx
}

function selectSort(arr:number[]){
  let len = arr.length
  let result = []
  for(let i =len;i>0;i--){
    let index = findMin(arr)
    let item = arr.splice(index,1)
    result.push(item[0])
  }
  return result
}

let r =selectSort([1,2,3,32,12,2,123,13])
console.log(r)
>>>>>>> f5d8ad70975f04680c2ced7bdcee2dae7eb33a21
