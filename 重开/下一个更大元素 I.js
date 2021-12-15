// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var nextGreaterElement = function (nums1, nums2) {
//   const map = {};
//   const stack = [];
//   const result = Array(nums1.length).fill(-1);
//   for (let index = 0; index < nums1.length; index++) {
//     map[nums1[index]] = index;
//   }
//   for (let index = 0; index < nums2.length; index++) {
//     const ele = nums2[index];
//     while (stack.length && ele > nums2[stack[stack.length - 1]]) {
//       const preIndex = stack.pop();
//       const nums1PreIndex = map[nums2[preIndex]];
//       result[nums1PreIndex] = ele;
//     }
//     stack.push(index);
//   }
//   return result;
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = {};
  const stack = [];
  const result = [];
  for (let index = 0; index < nums2.length; index++) {
    const ele = nums2[index];
    while (stack.length && ele > stack[stack.length - 1]) {
      const node = stack.pop();
      map[node] = ele;
    }
    stack.push(ele);
  }
  for (let index = 0; index < nums1.length; index++) {
    result[index] = map[nums1[index]] || -1;
  }
  return result;
};
