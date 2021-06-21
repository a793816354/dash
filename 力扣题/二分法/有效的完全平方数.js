/**
 * @param {number} num
 * @return {boolean}
 */
//效率低
// var isPerfectSquare = function (num) {
//   let index = 0;
//   while (index * index <= num) {
//     if (index * index === num) {
//       return true;
//     }
//     index++;
//   }
//   return false;
// };

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 0;
  let right = num;

  while (left <= right) {
    const mid = left + Math.floor((right-left)/2);
    if (num/mid===mid) {
      return true;
    } else if (num/mid > mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};
