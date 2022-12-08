/**
 * 线性时间复杂度排序算法
 * 桶排序、基数排序
 */

/**
 * 桶排序
 * 限制、被排序的元素不能过大，否则额外的空间太多
 * @param arr 
 */
function bucketSort(arr:number[]){
  const data:number[] = []
  const result = [];
  for(let i =0;i<arr.length;i++){
    if(!data[arr[i]]){
      data[arr[i]] = 1
    }else{
      data[arr[i]]+=1
    }
  }

  for(let k=0;k<data.length;k++){
    let count = data[k]
    while(count-->0){
      result.push(k)
    }
  }
  console.log(result);
}
bucketSort([1,5,3,6,8,9,2])


/**
 * 基数排序 
 * 主位优先、次位优先
 */
 baseSort([2,9,4,36,123,422,587,900,89])
function baseSort(arr:number[]){
// 
}