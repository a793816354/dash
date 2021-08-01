/**
 * @param {number[]} nums
 * @return {number}
 */

//记录跳跃次数，此时不能再按顺序遍历，而是要找出层次
var jump = function (nums) {
  if (nums.length < 2) return 0;

  let finalIndex = nums.length - 1;
  let lastIndex = 0;
  let result = 0;

  let max = 0;
  for (let i = 0; i < finalIndex; i++) {
    const val = i + nums[i];
    max = Math.max(max, val);
    if (i === lastIndex) {
      lastIndex = max;
      result++;
    }
  }
  return result;
};
console.log(jump([1, 1, 2, 1, 1]));
console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([1, 2]));
console.log(jump([0]));
console.log(jump([1, 1, 1, 1, 1]));
console.log(jump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]));
