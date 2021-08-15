const { getRandomArr, isSorted } = require("../../../资源.js");

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortArray = function (nums) {
//   const counting = [];
//   for (let index = 0; index < nums.length; index++) {
//     const ele = nums[index];
//     if (counting[ele]) {
//       counting[ele]++;
//     } else {
//       counting[ele] = 1;
//     }
//   }

//   for (let index = 1; index < counting.length; index++) {
//     counting[index] = (counting[index] || 0) + counting[index - 1] || 0;
//   }
//   counting[0] = counting[0] === undefined ? 0 : counting[0];
//   const result = [];
//   for (let index = nums.length - 1; index >= 0; index--) {
//     const ele = nums[index];
//     const count = counting[ele] < 0 ? 0 : counting[ele];
//     result[count - 1] = ele;
//     counting[ele]--;
//   }

//   for (let index = 0; index < nums.length; index++) {
//     nums[index] = result[index];
//   }
//   return nums;
// };

// const arr = getRandomArr();
// // const arr = [5, 1, 1, 2, 0, 0];
// console.log(arr);
// console.log(sortArray(arr));
// console.log(isSorted(sortArray(arr)));

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const counting = [];
  for (let index = 0; index < arr1.length; index++) {
    const ele = arr1[index];
    if (counting[ele]) {
      counting[ele]++;
    } else {
      counting[ele] = 1;
    }
  }

  const result = [];
  for (let index = 0; index < arr2.length; index++) {
    const ele = arr2[index];
    while (counting[ele]) {
      result.push(ele);
      counting[ele]--;
    }
  }

  for (let index = 0; index < counting.length; index++) {
    while (counting[index]) {
      result.push(index);
      counting[index]--;
    }
  }
  return result;
};
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
