/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = nums[0];
  for (let index = 1; index < nums.length; index++) {
    result ^= nums[index];
  }
  return result;
};
