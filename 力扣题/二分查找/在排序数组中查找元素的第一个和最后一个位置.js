/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var leftFirst = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (nums[left] === target) {
    return left;
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var rightEnd = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.ceil((right - left) / 2);
    if (nums[mid] === target) {
      left = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (nums[left] === target) {
    return left;
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [leftFirst(nums, target), rightEnd(nums, target)];
};
// console.log(searchRange([5, 7, 7, 8, 8, 8, 10], 8));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange2 = function (nums, target) {
  const result = [-1, -1];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      let tempLeft = left;
      let tempRight = right;

      while (tempLeft < tempRight) {
        const leftMid = tempLeft + Math.floor((tempRight - tempLeft) / 2);
        if (nums[leftMid] === target) {
          tempRight = leftMid;
        } else if (nums[leftMid] < target) {
          tempLeft = leftMid + 1;
        } else {
          tempRight = leftMid - 1;
        }
      }

      if (nums[tempLeft] === target) {
        result[0] = tempLeft;
      } else {
        break;
      }

      while (left < right) {
        const rightMid = left + Math.ceil((right - left) / 2);
        if (nums[rightMid] === target) {
          left = rightMid;
        } else if (nums[rightMid] < target) {
          left = rightMid + 1;
        } else {
          right = rightMid - 1;
        }
      }
      if (nums[left] === target) {
        result[1] = left;
      }

      break;
    }
  }
  return result;
};
// console.log(searchRange2([5, 7, 7, 8, 8, 8, 10], 8));
console.log(searchRange2([1], 1));
