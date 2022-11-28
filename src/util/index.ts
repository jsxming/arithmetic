//元素交换
export function swap(arr:number[],i:number,k:number){
  const temp = arr[i]
  arr[i] = arr[k]
  arr[k] = temp
}