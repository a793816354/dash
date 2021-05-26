/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[right] !== nums[left]) {
      nums[++left] = nums[right];
    }

    right++;
  }

  return left + 1;
};
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
