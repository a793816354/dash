/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;
  const result = [];

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === x) {
      break;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  left = mid ? mid - 1 : mid;
  right = mid ? mid : mid + 1;

  while (k > 0) {
    if (
      arr[left] !== undefined &&
      (arr[right] === undefined ||
        Math.abs(arr[left] - x) <= Math.abs(arr[right] - x))
    ) {
      result.unshift(arr[left]);
      left--;
    } else if (arr[right] !== undefined) {
      result.push(arr[right]);
      right++;
    }
    k--;
  }

  return result;
};
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
console.log(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9));
console.log(findClosestElements([-2, -1, 1, 2, 3, 4, 5], 7, 3));
console.log(findClosestElements([0, 1, 1, 1, 2, 3, 6, 7, 8, 9], 9, 4));
console.log(findClosestElements([0, 0, 1, 2, 3, 3, 4, 7, 7, 8], 3, 5));
console.log(findClosestElements([1, 5, 10], 1, 4));
console.log(findClosestElements([1, 3], 1, 2));
