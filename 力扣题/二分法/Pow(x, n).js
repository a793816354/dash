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
const findBestKey = (num) => {};

// 并存入map，按需取出来用
var myPow = function (x, n) {
  const obj = { 1: x };
  let m = 1;
  let result = 1;
  while (true) {
    obj[m * 2] = obj[m] * obj[m];
    result = obj[m * 2];
    m *= 2;
 
    if (m * 2 > n) {
      let gap = n - m;
      while (gap>0) {
        // if(){
        //     const cur = 
        //     gap-=
        // }

        const halfGap = Math.floor(gap / 2);
               console.log(halfGap);
        result *= obj[halfGap];
        console.log(result);
        gap /= 2;
      }
      break;
    }
  }

  //   while ((n-m)%2) {
  //     result *= obj[k];
  //     k /= 2;
  //   }

  return result;
  //   const formatN = n > 0 ? n : 0 - n;
  //   let formatX = n > 0 ? x : 1 / x;
  //   let result = 1;

  //   for (let index = 0; index < formatN; index++) {
  //     result *= formatX;
  //   }
  //   return result;
};
console.log(myPow(2.0, 10));
