/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const set = new Set();
  for (let index = 0; index < nums.length; index++) {
    if (set.has(nums[index])) {
      set.delete(nums[index]);
    } else {
      set.add(nums[index]);
    }
  }
  return [...set.values()][0];
};
