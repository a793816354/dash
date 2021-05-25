/**
 * @param {number[]} nums
 * @return {number}
 */
// var pivotIndex = function (nums) {
//   let leftValue = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let right = nums.length;
//     let rightValue = 0;
//     leftValue += nums[i - 1] || 0;

//     while (right > i + 1) {
//       right--;
//       rightValue += nums[right] || 0;
//     }

//     if (leftValue === rightValue && i === right - 1) {
//       return i;
//     }

//     right = nums.length - i;
//   }
//   return -1;
// };

// var pivotIndex2 = function (nums) {
//   const leftArr = [0];
//   const rightArr = [0];
//   let leftSum = 0;
//   let rightSum = 0;
//   for (let index = 0; index < nums.length; index++) {
//     leftSum += nums[index];
//     leftArr.push(leftSum);
//     rightSum += nums[nums.length - 1 - index];
//     rightArr.push(rightSum);
//   }

//   for (let index = 0; index < leftArr.length; index++) {
//     if (leftArr[index] === rightArr[leftArr.length - 2 - index]) {
//       return index;
//     }
//   }

//   return -1;
// };

var pivotIndex3 = function (nums) {
  let sum = 0;
  let leftSum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
  }

  for (let index = 0; index < nums.length; index++) {
    if (leftSum === sum - nums[index] - leftSum) {
      return index;
    }
    leftSum += nums[index];
  }

  return -1;
};
console.log(pivotIndex3([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex3([1, 2, 3]));
console.log(pivotIndex3([2, 1, -1]));
console.log(pivotIndex3([-1, -1, -1, 0, -1, -1]));
console.log(pivotIndex3([-1, -1, -1, 0, 1, -1]));
console.log(pivotIndex3([-1, -1, 0, 1, 1, 0]));
