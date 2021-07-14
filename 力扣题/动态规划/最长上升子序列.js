/**
 * @param {number[]} nums
 * @return {number}
 */
// 失败
// var lengthOfLIS = function (nums) {
//   if (nums.length < 2) {
//     return nums.length;
//   }

//   const curVal = nums[nums.length - 1];
//   let index = nums.length - 2;
//   for (; index >= 0; index--) {
//     const ele = nums[index];
//     if (curVal > ele) {
//       break;
//     }
//   }

//   return lengthOfLIS(nums.slice(0, index === -1 ? 0 : index)) + 1;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  

  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    let lastMax = ele
    for (let j = i + 1; j < array.length; j++) {
      if(){

      }
    }
  }
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
