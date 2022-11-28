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

/**
 * 希尔排序 增量序列D
 * 
 * @param arr 
 */
function hill(arr:number[]){
  const len = arr.length
  // 类似插入排序的优化，代码跟插入排序长得也差不多。把1换成D，外面加一层D
  for(let D=Math.floor(len/2); D>0; D=Math.floor(D/2)){    
    
    for(let p=D; p<len; p++){
      const temp = arr[p]
      for(let i=p; i>0 && arr[i-D] >temp;i-=D){
          arr[i] = arr[i-D] 
          arr[i-D]  =temp
      }
    }

  }
  console.log(arr)
}

hill([28,8,64,51,32,21])