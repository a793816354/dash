const { getRandomArr } = require("../../../资源.js");
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var insertSort = function (nums) {
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (nums[j] < nums[j - 1]) {
//         swap(nums, j, j - 1);
//       } else {
//         break;
//       }
//     }
//   }
//   return nums;
// };

//重写
var insertSort = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        swap(nums, j, j - 1);
      } else {
        break;
      }
    }
  }
  return nums;
};

const arr = getRandomArr();
console.log(arr);
console.log(insertSort(arr));
