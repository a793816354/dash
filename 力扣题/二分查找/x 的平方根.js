/**
 * @param {number} x
 * @return {number}
 */
//bf
var mySqrt = function (x) {
  let result = 0;
  while (!(result * result <= x && (result + 1) * (result + 1) > x)) {
    result++;
  }
  return result;
};
console.log(mySqrt(8));

//binarySearch
const isSqrtNum = (num, target) => {
  return num * num <= target && (num + 1) * (num + 1) > target;
};

var mySqrt2 = function (x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (isSqrtNum(mid, x)) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};
console.log(mySqrt2(8));
