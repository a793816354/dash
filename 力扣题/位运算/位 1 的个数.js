// /**
//  * @param {number} n - a positive integer
//  * @return {number}
//  */
// var hammingWeight = function (n) {
//   let res = 0;
//   for (let index = 0; index < 32; index++) {
//     res += n & 1;
//     n = n >> 1;
//   }
//   return res;
// };
// /**
//  * @param {number} n - a positive integer
//  * @return {number}
//  */
// var hammingWeight = function (n) {
//   let res = 0;
//   while (n) {
//     n &= n - 1;
//     res++;
//   }
//   return res;
// };

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let res = 0;
  while (n !== 0) {
    res++;
    n &= n - 1;
  }
  return res;
};
console.log(hammingWeight(11111111111111111111111111111101));
