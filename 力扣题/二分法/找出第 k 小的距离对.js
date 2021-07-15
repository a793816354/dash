/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 效率低
var smallestDistancePair = function (nums, k) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      result.push(Math.abs(nums[j] - nums[i]));
    }
  }
  result.sort((a, b) => a - b);
  return result[k - 1];
};
// console.log(smallestDistancePair([1, 3, 1], 1));
// console.log(smallestDistancePair([1, 6, 1], 3));
// console.log(smallestDistancePair([2, 2, 0, 1, 1, 0, 0, 1, 2, 0], 2));
