/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let rotateNum = 0;
  const sourceNumsLength = nums.length;
  for (let index = 0; index < sourceNumsLength; index++) {
    if (nums[index] === target) {
      return index;
    }

    if (nums[index + 1] === undefined) {
      return -1;
    }

    if (nums[index] > nums[index + 1]) {
      break;
    }
    rotateNum++;
  }

  for (
    let index = sourceNumsLength;
    index < sourceNumsLength + rotateNum + 1;
    index++
  ) {
    nums[index] = nums[index - sourceNumsLength];
  }

  let left = rotateNum + 1;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([1], 1));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 2));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 5));

var binarySearch = function (nums, target, start, end = nums.length - 1) {
  let left = start;
  let right = end;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    // console.log(left);
    // console.log(right);
    // console.log(mid);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
      continue;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search2 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let rotateNum = 0;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === undefined) {
      return -1;
    }

    if (nums[mid] > nums[mid + 1]) {
      rotateNum = mid;
      break;
    }

    if (nums[left] < nums[mid]) {
      left = mid;
    } else if (nums[right] > nums[mid]) {
      right = mid;
    }
  }

  // console.log(nums.slice(0, rotateNum + 1));
  // console.log(nums.slice(rotateNum + 1));
  // console.log(rotateNum);
  const leftSearchIndex = binarySearch(nums, target, 0, rotateNum);
  const rightSearchIndex = binarySearch(nums, target, rotateNum + 1);
  return Math.max(
    leftSearchIndex,
    rightSearchIndex === -1 ? -1 : rightSearchIndex
  );
};
console.log(search2([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search2([1], 1));
console.log(search2([4, 5, 6, 7, 0, 1, 2], 2));
console.log(search2([3, 4, 5, 6, 1, 2], 2));
console.log(search2([1], 2));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search3 = function (nums, target) {
//   let left = 0;
//   let target = nums.length - 1;

//   while (left <= right) {
//     const mid = left + Math.floor((right - left) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       // right = mid - 1;
//     }
//   }
//   return -1;
// };
