/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    } else {
      if (nums[right] < nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return nums[left];
};
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
console.log(findMin([1, 2]));
console.log(findMin([3, 1, 2]));
console.log(findMin([2, 3, 4, 5, 1]));
console.log(findMin([5, 1, 2, 3, 4]));
