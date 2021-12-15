/**
 * @param {number[]} nums
 * @return {number}
 */
// 最少的跳跃次
// [2,3,1,1,4]
// var jump = function (nums, position = nums.length - 1) {
//   let count = Infinity;
//   if (position <= 0) return 0;
//   for (let index = 0; index < position; index++) {
//     if (index + nums[index] >= position) {
//       count = Math.min(count, jump(nums, index) + 1);

//     }
//   }
//   return count;
// };

// var jump = function (nums) {
//   let result = 0;
//   let position = nums.length - 1;
//   while (position > 0) {
//     for (let index = 0; index < position; index++) {
//       if (index + nums[index] >= position) {
//         position = index;
//         result++;
//         break;
//       }
//     }
//   }
//   return result;
// };

var jump = function (nums) {
  const count = [0];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < i + 1 + nums[i] && j < nums.length; j++) {
      if (!count[j]) count[j] = count[i] + 1;
    }
  }
  return count[nums.length-1]
};
// console.log(jump([2,3,1,1,4]));
console.log(jump([2, 3, 1, 1, 4]));
// console.log(jump([2,3,1,1,4]));
