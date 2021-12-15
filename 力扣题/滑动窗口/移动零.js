/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index]) {
      nums[left] = nums[index];
      left++;
    }
  }
  for (let index = left; index < nums.length; index++) {
    nums[index] = 0;
  }
  return nums;
};
