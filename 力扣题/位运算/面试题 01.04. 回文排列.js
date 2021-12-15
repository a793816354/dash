//最多出现一个多余的字符

/**
 * @param {string} s
 * @return {boolean}
 */
// // set
// var canPermutePalindrome = function (s) {
//   const set = new Set();
//   for (let index = 0; index < s.length; index++) {
//     const char = s[index];
//     if (set.has(char)) {
//       set.delete(char);
//     } else {
//       set.add(char);
//     }
//   }
//   return set.size < 2;
// };

/**
 * @param {string} s
 * @return {boolean}
 */
// 位运算做存储,只能做前32位，但是此题包含了大写字母和//
// var canPermutePalindrome = function (s) {
//   let num = 0;
//   const initCode = "a".charCodeAt(0);
//   for (let index = 0; index < s.length; index++) {
//     const char = s[index];
//     const code = char.charCodeAt(0) - initCode;

//     curBit = num >> code;
//     if (curBit&1) {
//       num -= 1 << code;
//     } else {
//       num += 1 << code;
//     }
//   }
//   return (num &(num - 1)) === 0
// };
// console.log(canPermutePalindrome("aab"));
console.log(canPermutePalindrome("carerac"));
