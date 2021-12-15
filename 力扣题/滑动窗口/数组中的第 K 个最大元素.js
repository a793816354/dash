/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 双指针
var findKthLargest = function (nums, k) {
  let arr = [];
  for (let index = 0; index < nums.length; index++) {
      const ele = nums[index]+1
    arr[ele] = (arr[ele] || 0) + 1;
  }
  for (let index = arr.length - 1; index >= 0; index--) {
    while (arr[index] && k) {
      arr[index]--;
      k--;
      if (!k) {
        return index-1;
      }
    }
  }
};
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
