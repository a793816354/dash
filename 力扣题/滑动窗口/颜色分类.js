// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var sortColors = function(nums) {
//     nums.sort((a,b)=>a-b)
//     return nums
// };

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//     const countingArr = []
//     for (let index = 0; index < nums.length; index++) {
//       countingArr[nums[index]]  =  (countingArr[nums[index]] ||0)+1
//     }
//     let numsIndex = 0
//     for (let index = 0; index < countingArr.length; index++) {
//         while(countingArr[index]){
//             nums[numsIndex] = index
//             numsIndex++
//             countingArr[index]--
//         }
//     }
//     return nums
// };
const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

// var sortColors = function (nums) {
//   let curIndex = 0;
//   for (let index = 0; index < nums.length; index++) {
//     if (!nums[index]) {
//       swap(nums, index, curIndex);
//       curIndex++;
//     }
//   }
//   for (let index = 0; index < nums.length; index++) {
//     if (nums[index] === 1) {
//       swap(nums, index, curIndex);
//       curIndex++;
//     }
//   }
//   return nums;
// };

// console.log(sortColors([2, 0, 1]));
console.log(sortColors([2, 0, 2, 1, 1, 0]));
