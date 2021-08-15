// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {character}
//  */
// // obj
// var findTheDifference = function (s, t) {
//   const obj = {};
//   for (let index = 0; index < s.length; index++) {
//     const ele = s[index];
//     if (obj[ele]) {
//       obj[ele]++;
//     } else {
//       obj[ele] = 1;
//     }
//   }
//   for (let index = 0; index < t.length; index++) {
//     if (obj[t[index]]) {
//       obj[t[index]]--;
//     } else {
//       return t[index];
//     }
//   }
// };

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// 字母表
// var findTheDifference = function (s, t) {
//   const arr = [];
//   const initNum = "a".charCodeAt(0);
//   for (let index = 0; index < s.length; index++) {
//     const eleIndex = s[index].charCodeAt(0);
//     arr[eleIndex] = (arr[eleIndex] || 0) + 1;
//   }
//   for (let index = 0; index < t.length; index++) {
//     const eleIndex = t[index].charCodeAt(0);
//     if (arr[eleIndex]) {
//       arr[eleIndex]--;
//     } else {
//       return t[index];
//     }
//   }
// };

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
//位运算
var findTheDifference = function (s, t) {
  let result = 0;
  for (let index = 0; index < s.length; index++) {
    result ^= s[index].charCodeAt(0);
  }
  for (let index = 0; index < t.length; index++) {
    result ^= t[index].charCodeAt(0);
  }

  return String.fromCharCode(result);
};
console.log(findTheDifference("abcd", "abcde"));
