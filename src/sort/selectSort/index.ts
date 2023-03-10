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