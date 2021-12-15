/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 双指针
// var intersect = function (nums1, nums2) {
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);
//   let one = 0;
//   let two = 0;
//   const result = [];
//   while (one < nums1.length && two < nums2.length) {
//     if (nums1[one] === nums2[two]) {
//       result.push(nums1[one]);
//       one++;
//       two++;
//     } else if (nums1[one] < [nums2[two]]) {
//       one++;
//     } else {
//       two++;
//     }
//   }
//   return result;
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// const find = (arr, target, start) => {
//   let left = start;
//   let right = arr.length - 1;
//   let flag = false;
//   while (left < right) {
//     const mid = left + Math.floor((right - left) / 2);
//     if (arr[mid] === target) {
//       right = mid;
//       flag = true;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   //   console.log(target);
//   //   console.log(left);
//   //   console.log(flag);
//   if (flag || (left === right && arr[left] === target)) return left;
//   return -1;
// };

// // map
// var intersect = function (nums1, nums2) {
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);
//   const lastFindMap = {};
//   const result = [];
//   for (let index = 0; index < nums1.length; index++) {
//     const ele = nums1[index];
//     const findIndex = find(nums2, ele, lastFindMap[ele] || 0);
//     if (findIndex !== -1) {
//       lastFindMap[ele] = findIndex + 1;
//       result.push(ele);
//     }
//   }
//   return result;
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// map
var intersect = function (nums1, nums2) {
  const result = [];
  const map = {};
  for (let index = 0; index < nums1.length; index++) {
    map[nums1[index]] = (map[nums1[index]] || 0) + 1;
  }
  for (let index = 0; index < nums2.length; index++) {
    if (map[nums2[index]]) {
      map[nums2[index]]--;
      result.push(nums2[index]);
    }
  }
  return result;
};
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
