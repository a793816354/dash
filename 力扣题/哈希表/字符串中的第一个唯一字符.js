/**
 * @param {string} s
 * @return {number}
 */
//哈希集合
// var firstUniqChar = function (s) {
//   const set = new Set();

//   for (let index = 0; index < s.length; index++) {
//     const ele = s[index];

//     if (set.has(ele)) {
//       set.delete(ele);
//     } else {
//       set.add(ele);
//     }
//   }
//   //只能返回值，不符合题意
//   return [...set][0];
// };



//哈希映射
var firstUniqChar = function (s) {
  const obj = {};

  for (let index = 0; index < s.length; index++) {
    const ele = s[index];

    if (obj[ele]) {
      obj[ele].num++;
    } else {
      obj[ele] = {
        num: 1,
        index,
      };
    }
  }
  for (const key in obj) {
    const { index, num } = obj[key];
    if (num === 1) {
      return index;
    }
  }
  return -1
};
console.log(firstUniqChar("leetcode"));