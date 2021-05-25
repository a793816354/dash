/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target < nums[0]) return 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === target) {
      return index;
    } else if (
      (nums[index] < target && nums[index + 1] > target) ||
      nums[index + 1] === undefined
    ) {
      return index + 1;
    }
  }
  return nums;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert2 = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === target) {
      return index;
    } else if (target < nums[index]) {
      return index;
    }
  }
  return nums.length;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert3 = function (nums, target) {
  let i = 0;
  for (let index = 0; index < nums.length; index++) {
    if (target > nums[index]) {
      i++;
    }
  }
  return i;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert4 = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (end > start) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      end = mid;
    }

    if (nums[mid] > target) {
      end = mid - 1;
    }

    if (nums[mid] < target) {
      start = mid + 1;
    }
  }

  if (nums[start] === target) {
    return start;
  }
  if (nums[start] < target) {
    return start + 1;
  }

  return start;
};

console.log(searchInsert4([1, 3, 5, 6], 5));
console.log(searchInsert4([1, 3, 5, 6], 2));
console.log(searchInsert4([1, 3, 5, 6], 7));
