const arr = [13,2,56,1,2,3,5,12,32]
const arrLen =arr.length


/**
 * 
 * @param arr 原始数组
 * @param temp  临时数组
 * @param L 左边开始位置
 * @param R 右边开始位置
 * @param RightEnd  右边终点位置
 */
function merge(arr:number[],temp:number[],L:number,R:number,RightEnd:number){
  //左边终点位置
  const LeftEnd = R-1
  //存放结果的数组的初始位置
  let Temp = L
  //元素个数
  const NumElements = RightEnd -L+1
  while(L<=LeftEnd && R<=RightEnd){
    if(arr[L]<=arr[R]){
      temp[Temp++] = arr[L++]
    }else{
      temp[Temp++] = arr[R++]
    }
  }
  // 复制剩下左边的
  while(L<=LeftEnd){
    temp[Temp++] = arr[L++]
  }
  // 复制剩下右边的
  while(R<=RightEnd){
    temp[Temp++]= arr[R++]
  }
  for(let i=0;i<NumElements;i++ ){
    arr[RightEnd] = temp[RightEnd--]
  }
}

/** 时间复杂度是O（N*logN）。空间复杂度是O（N）
 * 递归实现  不断的拆分成子数组
 * @param arr 
 * @param temp 
 * @param L 
 * @param RightEnd 
 */
function MSrot(arr:number[],temp:number[],L:number,RightEnd:number){
  if(L<RightEnd){
    const center = parseInt(((L+RightEnd) / 2)+'')
    MSrot(arr,temp,L,center)
    MSrot(arr,temp,center+1,RightEnd)
    merge(arr,temp,L,center+1,RightEnd)
  }
}

// MSrot(arr,new Array(arrLen),0,arrLen-1)
// console.log(arr);

//非递归实现
function mergePass(arr:number[],temp:number[],N:number,length:number){
  for(let i=0;i<=N-2*length;i+=2*length){
    console.log(i,i+length,i+2*length-1);
    merge(arr,temp,i,i+length,i+2*length-1)
    if(i+length<N){
      for(let j = i;j<N;j++){
        temp[j] = arr[j]
      }
    }
  }
}
// mergePass(arr,new Array(arrLen),arrLen,1)

function start(){
  let len =1;
  const temp = new Array(arrLen)
  while(len<arrLen){
    mergePass(arr,temp,arrLen,len)
    len*=2
  }
}
start()
console.log(arr);
