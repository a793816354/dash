// const binarySearch = (arr, target) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = left + Math.floor((right - left) / 2);
//     const value = arr[mid];
//     if (value === target) {
//       return mid;
//     } else if (value < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// };

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   const arr = nums.slice();
//   arr.sort((a, b) => a - b);

//   for (let index = 0; index < nums.length; index++) {
//     const ele = nums[index];
//     const anotherEle = target - ele;
//     if (binarySearch(arr, anotherEle) !== -1) {
//       for (let j = index + 1; j < nums.length; j++) {
//         if (nums[j] === anotherEle) {
//           return [index, j];
//         }
//       }
//     }
//   }
// };

// // console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([-1, -2, -3, -4, -5], -8));

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let one = 0;
  let two = 0;

  while (one < nums1.length && two < n) {
    if (nums1[one] > nums2[two]) {
      for (let index = nums1.length - 1; index > one; index--) {
        nums1[index] = nums1[index - 1];
      }
      nums1[one] = nums2[two];
      two++;
    }
    one++;
  }

  const rest = n - two;
  for (let index = 0; index < rest; index++) {
    nums1[nums1.length - rest + index] = nums2[two + index];
  }

  return nums1;
};
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));
