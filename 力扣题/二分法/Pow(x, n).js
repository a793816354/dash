/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
//迭代，效率低，使用递归效率更低
// var myPow = function (x, n) {
//   const formatN = n > 0 ? n : 0 - n;
//   let formatX = n > 0 ? x : 1 / x;
//   let result = 1;

//   for (let index = 0; index < formatN; index++) {
//     result *= formatX;
//   }
//   return result;
// };
// console.log(myPow(2.0, 10));
// console.log(myPow(2.0, -2));
// console.log(myPow(0.44528, 0));
// console.log(myPow(2.1, 3));

//思路：分治：拿当前的结果与当前的结果相乘,
// const findBestKey = (num) => {

// };

// 并存入map，按需取出来用
var myPow = function (x, n) {
  //处理正负n，大小x
  const formatN = n > 0 ? n : 0 - n;
  let formatX = n > 0 ? x : 1 / x;

  // 存入map，按需取出来用
  const obj = { 1: formatX };
  let m = 1;
  let result = 1;

  while (n) {
    result = obj[m];
    if (m * 2 > formatN) {
      let gap = formatN - m;

      while (gap > 0) {
        let targetMaxNum = 1;
        while (targetMaxNum * 2 < gap) {
          targetMaxNum *= 2;
        }
        result *= obj[targetMaxNum];
        gap -= targetMaxNum;
      }
      break;
    }

    obj[m * 2] = obj[m] * obj[m];
    m *= 2;
  }

  return result;
};
console.log(myPow(2.0, 10));
console.log(myPow(2.0, -2));
console.log(myPow(0.44528,0));
console.log(myPow(8.95371, -1));
console.log(myPow(1.72777, 7));
