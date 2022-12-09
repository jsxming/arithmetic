/**
 * 物理排序
 * 表排序当待排数组中的元素不是简简单单的整数，而是复杂的结构体，那么移动元素所花费的时间就不能忽略不计了，这时候我们要减少元素之间移动的次数了。
 * 表排序就是这么一个排序，在表排序的过程中，实际上是不需要移动元数，我们要移动的是指向这些元素的指针 
 */

//表示无限大的数据,在排序完成之前都不会移动这些数据
const sourceData = ["f","d","c","a","g","b","h","e"]

//用于辅助排序的 数组，排序时移动这里面的数据
const table = [0,1,2,3,4,5,6,7]
const len = sourceData.length

//排序后与数据源 顺序一致
for(let p=1; p < len ;p++){
  const temp = table[p]
  //比较数据源的大小
  for(let i=p; i>0 && sourceData[temp] < sourceData[table[i-1]];i--){
    //交换的是辅助排序数组中的顺序
    table[i] = table[i-1]
    table[i-1] = temp
    }
}

console.log(table,'table  ----') //table =  [3, 5, 2, 1,7, 0, 4, 6]

for(let p=1; p<len ;p++){
  const temp = table[p]
  for(let i=p; i>0 && sourceData[table[i-1]] > sourceData[temp];i--){
    // 被排序的是table中的指针 
    table[i] = table[i-1] 
    table[i-1]  = temp
  }
}

table.forEach(item=>{
  console.log(sourceData[item])
})

console.log(table)
