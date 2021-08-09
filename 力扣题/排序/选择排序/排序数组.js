const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 冒泡排序
var sortArray = function (nums) {
  let lastIndex = nums.length - 1;
  for (let i = 0; i < nums.length - 1; i++) {
    let flag = false;
    let swapIndex = -1;
    for (let j = 0; j < lastIndex; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        flag = true;
        swapIndex = j;
      }
    }
    if (!flag) break;
    lastIndex = swapIndex;
  }
  return nums;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//选择排序
// var sortArray = function (nums) {
//   let minIndex;
//   for (let i = 0; i < nums.length - 1; i++) {
//     minIndex = i;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[minIndex] > nums[j]) {
//         minIndex = j;
//       }
//     }
//     swap(nums, minIndex, i);
//   }
//   return nums;
// };
