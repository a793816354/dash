/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let max = 0;
  let sum = nums[0] || 0;

  while (right < nums.length) {
    if (nums[right] === target) {
      return 1;
    }
    // console.log(right);
    // console.log(left);
    // console.log(sum);
    // console.log("---------------------");
    if (sum < target) {
      right++;
      sum += nums[right];

      continue;
    }

    if (sum > target) {
      sum -= nums[left];
      left++;
      continue;
    }

    if (sum === target) {
      if (max < right - left) {
        max = right - left;
      }

      right++;
      left++;
    }
  }
  return max;
};

// console.log(minSubArrayLen(7, [2, 3, , 31, 2, 4]));
console.log(minSubArrayLen(4, [1, 4, 4]));
