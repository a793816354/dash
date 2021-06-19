// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findPeakElement = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     const mid = left + Math.floor((right - left) / 2);

//     if (
//       (nums[mid - 1] === undefined ||
//         (nums[mid - 1] !== undefined && nums[mid] > nums[mid - 1])) &&
//       (nums[mid + 1] === undefined ||
//         (nums[mid + 1] !== undefined && nums[mid] > nums[mid + 1]))
//     ) {
//       return mid;
//     }

//     if (
//       nums[mid - 1] === undefined ||
//       (nums[mid - 1] !== undefined && nums[mid] > nums[mid - 1])
//     ) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return left;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement2 = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid - 1] === undefined || nums[mid] > nums[mid - 1]) {
      if (nums[mid + 1] === undefined || nums[mid] > nums[mid + 1]) {
        return mid;
      } else {
        left = mid + 1;
      }
    } else {
      right = mid - 1;
    }
  }
  return left;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[mid - 1]) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return nums[left] > nums[right] ? left : right;
};
console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement([6, 5, 4, 3, 2, 3, 2]));
console.log(findPeakElement([1, 2]));
