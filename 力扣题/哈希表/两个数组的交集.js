/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 哈希表
// var intersection = function (nums1, nums2) {
//   const set = new Set(nums1);
//   const result = new Set();

//   for (let index = 0; index < nums2.length; index++) {
//     if (set.has(nums2[index])) {
//       result.add(nums2[index]);
//     }
//   }
//   return [...result];
// };

//排序+双指针
var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const result = [];

  let one = 0;
  let two = 0;

  while (one < nums1.length && two < nums2.length) {
    if (nums1[one] > nums2[two]) {
      two++;
    } else if (nums1[one] < nums2[two]) {
      one++;
    } else {
      if (result[result.length - 1] !== nums1[one]) {
        result[result.length] = nums1[one];
      }
      two++;
      one++;
    }
  }

  return result;
};

// 二分查找,待做
