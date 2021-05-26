/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let left = 0;
  let right = 0;
  let max = 0;

  while (right <= nums.length) {
    if (nums[right] === 0 || right === nums.length) {
      if (max < right - left) {
        max = right - left;
      }

      left = right + 1;
    }

    right++;
  }
  return max;
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1, 1, 0, 1]));
