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
let arr = ["flower", "flower", "flower", "flower"]
// let arr = ["abca", "abc"]
let r = longestCommonPrefix(arr)
console.log(r, '---');