/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let exceptNum = ((1 + nums.length) * nums.length) / 2;

  let actualNum = 0;
  for (let index = 0; index < nums.length; index++) {
    actualNum += nums[index];
  }
  return exceptNum - actualNum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function (nums) {
//   const arr = [];
//   for (let index = 0; index < nums.length; index++) {
//     arr[nums[index]] = 1;
//   }
//   for (let index = 0; index < arr.length; index++) {
//     if (!arr[index]) return index;
//   }
//   return arr.length;
// };

// console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
