// /**
//  * @param {number} n - a positive integer
//  * @return {number} - a positive integer
//  */
// var reverseBits = function (n) {
//   let result = 0;
//   for (let index = 0; index < 32; index++) {
//     if ((n >> index) & 1) {
//       result += Math.abs(1 << (31 - index));
//     }
//   }
//   return result;
// };

// /**
//  * @param {number} n - a positive integer
//  * @return {number} - a positive integer
//  */
// var reverseBits = function (n) {
//   let result = 0;
//   for (let index = 0; index < 32; index++) {
//     if ((n >> index) & 1) {
//       result += Math.pow(2, 31 - index);
//     }
//   }
//   return result;
// };

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;
  for (let index = 0; index < 32; index++) {
    if ((n >> index) & 1) {
      result += Math.pow(2, 31 - index);
    }
  }
  return result;
};
