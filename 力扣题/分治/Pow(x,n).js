/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
//一个个乘，效率太低，应该尽量翻倍乘
// var myPow = function (x, n) {
//   let result = 1;
//   const formatN = Math.abs(n);
//   for (let index = 0; index < formatN; index++) {
//     result *= x;
//   }
//   return n >= 0 ? result : 1 / result;
// };

//使用缓存，以及二次幂寻找 速度快了些
// const getMaxBinaryNum = (num) => {
//   let result = 1;
//   while (result * 2 <= num) {
//     result *= 2;
//   }
//   return result;
// };

// var myPow = function (x, n) {
//   if (!n) return 1;

//   const formatN = Math.abs(n);
//   let result = x;
//   let index = 1;
//   const map = { 1: x };

//   while (index < formatN) {
//     if (index * 2 < formatN) {
//       result *= map[index];
//       index *= 2;
//       map[index] = result;
//     } else {
//       const gap = formatN - index;
//       const maxBinaryNum = getMaxBinaryNum(gap);
//       index += maxBinaryNum;
//       result *= map[maxBinaryNum];
//     }
//   }

//   return n > 0 ? result : 1 / result;
// };

const getMaxBinaryNum = (num) => {
  let result = 1;
  while (result * 2 <= num) {
    result *= 2;
  }
  return result;
};
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n, map = { 1: x }) {
  const formatN = Math.abs(n);
  if (formatN >= 2) {
    const maxBinaryNum = getMaxBinaryNum(formatN);
    const maxBinaryNumRes =
      myPow(x, maxBinaryNum / 2, map) * myPow(x, maxBinaryNum / 2, map);

    map[maxBinaryNum] = maxBinaryNumRes;
    const gap = formatN - maxBinaryNum;

    const res = maxBinaryNumRes * myPow(x, gap, map);
    return n > 0 ? res : 1 / res;
  } else if (formatN >= 1) {
    return n > 0 ? map[1] : 1 / map[1];
  } else {
    return 1;
  }
};

console.log(myPow(2.0, 10));

console.log(myPow(2.0, -2));
console.log(myPow(1.84364, -14));
