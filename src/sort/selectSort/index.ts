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