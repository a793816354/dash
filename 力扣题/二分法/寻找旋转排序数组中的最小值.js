/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] !== undefined && nums[mid] < nums[mid - 1]) {
      return nums[mid];
    } else if (nums[left] < nums[mid]) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return nums[0];
};
// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
// console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
