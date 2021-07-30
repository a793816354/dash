/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
      continue;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
};
// console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([2, 5], 5));
