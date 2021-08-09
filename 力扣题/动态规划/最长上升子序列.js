/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums, value) {
  // console.log(nums);
  let a = 1;
  for (let index = 1; index < nums.length - 1; index++) {
    const ele = nums[index];
    if (ele < value || value === undefined) {
      a = Math.max(a, lengthOfLIS(nums.slice(0, index + 1), nums[index]) + 1);
    }
  }
  return a;
};
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5]));
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12], 3));
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
