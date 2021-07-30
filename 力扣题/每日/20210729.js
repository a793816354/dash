/**
 * @param {number[]} nums
 * @return {number[]}
 */
//排序
// var sortedSquares = function(nums) {
//     const result = []
//     for (let index = 0; index < nums.length; index++) {
//         const ele = nums[index]
//         result.push(ele*ele)
//     }
//     return result.sort((a,b)=>a-b)
// };

// const findFirstPositiveNum = (arr) => {
//   if (arr[arr.length - 1] <= 0) return arr.length - 1;

//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     const mid = left + Math.floor((right - left) / 2);
//     if (arr[mid] > 0) {
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return left;
// };

// //二分找转折点，判断左右
// var sortedSquares = function (nums) {
//   // positive
//   const firstIndex = findFirstPositiveNum(nums);
//   const result = [];

//   let left = firstIndex - 1;
//   let right = firstIndex;
//   while (left >= 0 || right < nums.length) {
//     const leftValue = nums[left] * nums[left];
//     const rightValue = nums[right] * nums[right];

//     if (isNaN(rightValue) || leftValue <= rightValue) {
//       result.push(leftValue);
//       left--;
//     } else if (isNaN(leftValue) || leftValue > rightValue) {
//       result.push(rightValue);
//       right++;
//     }
//   }
//   return result;
// };
// // console.log(sortedSquares([-5, -3, -2, -1]));
// console.log(sortedSquares([-7,-3,2,3,11]));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//非原地
// var rotate = function(nums, k) {
//     const startIndex = nums.length-k
//     // index
//     const result = []
//     for (let index = startIndex; index < nums.length+startIndex; index++) {
//         const ele = nums[index%nums.length];
//         result.push(ele)
//     }
//     return result
// };
// console.log(rotate([1,2,3,4,5,6,7],3));

const wrap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// var rotate = function(nums, k) {
//     const formatK = k%nums.length
//        const startIndex = nums.length-formatK
//     // index
//     const result = []
//     for (let index = startIndex; index < nums.length+startIndex; index++) {
//         const ele = nums[index%nums.length];
//         result.push(ele)
//     }

//     for (let index = 0; index < result.length; index++) {
//         nums[index] = result[index]

//     }

//     return nums
// };

// var rotate = function (nums, k) {
//   let formatK = k % nums.length;
//   for (let index = formatK; index > 0; index--) {
//     const lastEle = nums[nums.length - 1];
//     for (let index = nums.length - 1; index >= 0; index--) {
//       nums[index] = nums[index - 1];
//     }
//     nums[0] = lastEle;
//   }
//   return nums
// };
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

const  binarySearch = (arr,target)=>{
    let left = 0
    let right = arr.length-1

    while(left<=right)
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

};