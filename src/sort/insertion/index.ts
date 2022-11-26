/**
 * 插入排序
 * 
 */

function insertion(arr:number[]){
  const len = arr.length
  for(let p=1; p<len ;p++){
    // 默认第一张牌在手里，从第二张开始摸
    const temp = arr[p]

    for(let i=p; i>0 && arr[i-1] >temp;i--){
        //移出空位
        arr[i] = arr[i-1] 
        //新牌落位
        arr[i-1]  =temp
    }
  }
  console.log(arr)
}

insertion([28,8,64,51,32,21])