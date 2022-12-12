function merge(arr:number[],left:number,right:number,rightEnd:number){
  let leftEnd = right-1;
  let count = rightEnd-left+1
  let tempArr:number[]=new Array(count)
  let startIndex=left;

  while(left<=leftEnd && right<=rightEnd){
    if(arr[left]<=arr[right]){
      tempArr[startIndex++] =arr[left++]
    }else{
      tempArr[startIndex++] =arr[right++]
    }
  }
  while(left<=leftEnd){
    tempArr[startIndex++] = arr[left++]
  }
  while(right<=rightEnd){
    tempArr[startIndex++] = arr[right++]
  }
  for(let i = 0;i<count;i++,rightEnd--){
    console.log( tempArr[rightEnd])
    arr[rightEnd] = tempArr[rightEnd]
  }
}

function mergeSort(arr:number[],left:number,rightEnd:number){
  if(left<rightEnd){
    let center = Math.floor((left+rightEnd) / 2)
    mergeSort(arr,left,center)
    mergeSort(arr,center+1,rightEnd)
    merge(arr,left,center+1,rightEnd)
  }
}

let arr = [2,1,3,5,7,1,11,231,12]
mergeSort(arr,0,8)
console.log(arr)
