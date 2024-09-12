//方法一： 每个字符的子串 纵向比较
function longestCommonPrefix(strs) {
  if (!strs.length) {
    return ''
  }
  let len = strs.length + 1
  let temp = ''
  let idx = 1;
  temp = strs[0].slice(0, idx)
  while (len >= 0) {
    temp = strs[0].slice(0, idx)
    for (let index = 0; index < strs.length; index++) {
      const element = strs[index];
      let r = element.slice(0, idx)
      if (r !== temp) {
        return temp.slice(0, idx - 1)
      }
    }
    idx += 1
    len--
  }
  return temp

}
// let arr = ['hello', 'hexxx', 'helxxo']
// let arr = ["flower", "flower", "flower", "flower"]
// let arr = ["abca", "abc"]
// let r = longestCommonPrefix(arr)
// console.log(r, '---');


//方法二：先排序，再比较第一个和最后一个
function longestCommonPrefix2(strs) {
  if (!strs.length) {
    return ''
  }
  strs.sort()

  let first = strs[0]
  let last = strs[strs.length - 1]
  let len = last.length + 1
  let idx = 1;
  let temp;
  while (len > 0) {
    temp = first.slice(0, idx)
    let r = last.slice(0, idx)
    if (r !== temp) {
      return temp.slice(0, idx - 1)
    }
    idx += 1
    len--
  }
  return temp

}


let a2 = ["abab", "aba", "abc"]
let r2 = longestCommonPrefix2(a2)

console.log(r2, '----------------------------------')