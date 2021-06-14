/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    const ele = nums[index];
    if (
      (nums[index - 1] === undefined || ele > nums[index - 1]) &&
      (nums[index + 1] === undefined || ele > nums[index + 1])
    ) {
      return index;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement2 = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const ele = nums[mid];
    if (
      (nums[mid - 1] === undefined || ele > nums[mid - 1]) &&
      (nums[mid + 1] === undefined || ele > nums[mid + 1])
    ) {
      return mid;
    }
    if (ele < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(findPeakElement2([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement2([1]));
console.log(findPeakElement2([1, 2]));
