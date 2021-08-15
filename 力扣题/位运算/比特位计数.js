// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// var countBits = function (n) {
//   const result = [];
//   for (let index = 0; index <= n; index++) {
//     let count = 0;
//     let num = index;
//     while (num) {
//       num &= num - 1;
//       count++;
//     }

//     result[index] = count;
//   }
//   return result;
// };

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = [0];
  for (let index = 1; index <= n; index++) {
    const xor = Math.floor(Math.log2(index ^ (index - 1)));
    const gap = ~xor + 2;
    result[index] = result[index - 1] + gap;
  }
  return result;
};
console.log(countBits(10));
