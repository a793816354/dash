/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right]) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }

  for (let index = left; index < nums.length; index++) {
    nums[index] = 0;
  }
  return nums;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes2 = function (nums) {
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[right]) {
      nums[left] = nums[right];
      nums[right] = 0;
      left++;
    }
    right++;
  }

  //   for (let index = left; index < nums.length; index++) {
  //     nums[index] = 0;
  //   }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 0, 0, 2, 0, 12]));
