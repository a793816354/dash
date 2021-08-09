const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 双指针
// var moveZeroes = function (nums) {
//   let left = 0;
//   let right = 0;

//   while (right < nums.length) {
//     if (nums[right] !== 0) {
//       swap(nums, left, right);
//       left++;
//     }

//     right++;
//   }
//   return nums;
// };

//冒泡排序
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let lastIndex = nums.length - 1;
  for (let i = 0; i < nums.length - 1; i++) {
    let flag = false;
    let swapIndex = -1;
    for (let j = 0; j < lastIndex; j++) {
      const ele = nums[j];
      if (ele === 0) {
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

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([1, 2]));
