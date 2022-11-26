//元素交换
export function swap(arr:number[],i:number,k:number){
  let temp = arr[i]
  arr[i] = arr[k]
  arr[k] = temp
}