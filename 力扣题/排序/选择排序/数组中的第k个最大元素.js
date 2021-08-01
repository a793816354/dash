const { getRandomArr } = require("../../../资源.js");

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIndex] < nums[j]) {
        minIndex = j;
      }
    }
    if (i === k - 1) {
      return nums[minIndex];
    } else {
      swap(nums, minIndex, i);
    }
  }
};

const arr = getRandomArr();
console.log(arr);
// console.log(findKthLargest(arr, 4));
console.log(findKthLargest([1], 1));
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// console.log([3, 2, 1, 5, 6, 4].sort((a, b) => a - b));
