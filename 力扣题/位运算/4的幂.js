// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// // 循环
// var isPowerOfFour = function (n) {
//   let result = 1;
//   while (result < n) {
//     result *= 4;
//   }
//   return result === n;
// };

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// // 循环
// var isPowerOfFour = function (n) {
//   while (n > 1) {
//     n /= 4;
//   }
//   return n === 1;
// };

/**
 * @param {number} n
 * @return {boolean}
 */
// 递归
// var isPowerOfFour = function (n) {
//   return n > 1 ? isPowerOfFour(n / 4) : n === 1;
// };

/**
 * @param {number} n
 * @return {boolean}
 */
//位运算
var isPowerOfFour = function (n) {
  return n > 0 && (n & (n - 1)) === 0 && (Math.log2(n) & 1) === 0;
};

/**
 * @param {number} n
 * @return {boolean}
 */
//位运算2  np
var isPowerOfFour = function (n) {
  return n > 0 && (n & (n - 1)) == 0 && n % 3 == 1;
};
console.log(isPowerOfFour(1));
