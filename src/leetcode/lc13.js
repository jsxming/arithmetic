/**
 * 13. 罗马数字转整数
 * https://leetcode.cn/problems/roman-to-integer/
 * @param {*} s 
 * @returns 
 */
function romanToInt(s) {
  let map = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000,
    'a':4,
    'b':9,
    'c':40,
    'd':90,
    'e':400,
    'f':900,
  }
  // IV 4  IX 9
  s = s.replace('IV','a')
  s = s.replace('IX','b')
  // IV XL 40  XC 90
  s = s.replace('XL','c')
  s = s.replace('XC','d')
  // CD 400  CM 900
  s = s.replace('CD','e')
  s = s.replace('CM','f')
  let arr = s.split('')
  let r = 0;
  for(let i =0;i<arr.length;i++){
    r +=map[arr[i]]
  }
  return r
}

function romanToInt2(s) {
  let arr = s.split('')
  let res = 0;
  let map = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000,
  }
  for(let i = 0;i<arr.length;i++){
    let current = map[arr[i]]
    let next = map[arr[i+1]]
    // 第一个字符 小 说明是特殊字符
    if(current<next){
      res +=next - current
      i++
    }else{
      res +=current
    }
  }
  return res
}

console.log(romanToInt("VI"));
console.log(romanToInt2("LVIII"));