/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
//速度慢，考虑2做指数分解n
// var myPow = function (x, n) {
//   let time = Math.abs(n);
//   const formatX = x >= 0 ? x : 1 / x;
//   let result = 1;
//   while (time) {
//     result *= formatX;
//     time--;
//   }
//   return result;
// };

// var myPow = function (x, n) {
//   const cache = {}
//     let m = 1
//   if(){

//   }
// };

const getMaxBinary = (num) => {
  let count = 1;
  while (count * 2 <= num) {
    count *= 2;
  }
  return count;
};

// const myPow = (x, n) => {
//   if (!n) return 1;

//   let formatN = Math.abs(n);
//   const formatX = n >= 0 ? x : 1 / x;

//   const maxCache = {};
//   const maxN = getMaxBinary(formatN);
//   let tempMaxN = 1;
//   while (tempMaxN <= maxN) {
//     maxCache[tempMaxN] =
//       maxCache[tempMaxN / 2] * maxCache[tempMaxN / 2] || formatX;
//     tempMaxN *= 2;
//   }

//   formatN -= maxN;
//   let result = maxCache[maxN];
//   while (formatN) {
//     const max = getMaxBinary(formatN);
//     result *= maxCache[max];
//     formatN -= max;
//   }
//   return result;
// };

const myPow = (x, n) => {
  let result = 1;
  const formatX = n >= 0 ? x : 1 / x;
  let formatN = Math.abs(n);
  const cache = { 1: formatX };
  let tempN = 1;

  while (tempN * 2 <= formatN) {
    cache[tempN * 2] = cache[tempN] * cache[tempN];
    tempN *= 2;
  }

  while (formatN) {
    while (tempN > formatN) {
      tempN /= 2;
    }

    formatN -= tempN;
    result *= cache[tempN];
  }

  return result;
};
console.log(myPow(2.0, -2));
