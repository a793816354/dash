/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   if (nums.length <= 1) return nums;

//   let left = 0;
//   let right = 0;

//   while (right < nums.length) {
//     if (nums[right] !== 0) {
//       nums[left] = nums[right];
//       if (right !== left) {
//         nums[right] = 0;
//       }
//       left++;
//     }

//     right++;
//   }
//   return nums;
// };

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function (nums) {
//   let left = 0;

//   for (let index = 0; index < nums.length; index++) {
//     const ele = nums[index];
//     if (ele !== 0) {
//       nums[left++] = ele;
//     }
//   }

//   for (let index = left; index < nums.length; index++) {
//     nums[index] = 0;
//   }

//   return nums;
// };

// /**
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i + 1, j + 1];
//       }
//     }
//   }
// };

// const binarySearch = (arr, target) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = left + Math.floor((right - left) / 2);
//     const value = arr[mid];
//     if (value === target) {
//       return true;
//     } else if (value < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return false;
// };

// /**
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (numbers, target) {
//   const temp = numbers.slice();
//   temp.sort((a, b) => a - b);

//   for (let i = 0; i < numbers.length; i++) {
//     const gap = target - numbers[i];
//     if (binarySearch(temp, gap)) {
//       for (let index = 0; index < numbers.length; index++) {
//         if (index !== i && numbers[index] === gap) {
//           return [i + 1, index + 1];
//         }
//       }
//     }
//   }
// };
// console.log(twoSum([2, 7, 11, 15], 9));

// const swap = (arr, a, b) => {
//   const temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
// };

// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// var reverseString = function (s) {
//   for (let index = 0; index < Math.floor(s.length / 2); index++) {
//     swap(s, index, s.length - 1 - index);
//   }
// };

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseWords = function (s) {
//   const arr = [];
//   let str = [];
//   for (let index = 0; index < s.length; index++) {
//     if (s[index] === " ") {
//       arr.push(str);
//       str = [];
//     } else {
//       str.push(s[index]);
//     }
//   }

//   if (str.length) {
//     arr.push(str);
//   }

//   for (let index = 0; index < arr.length; index++) {
//     reverseString(arr[index]);
//   }

//   let result = "";
//   for (let index = 0; index < arr.length; index++) {
//     for (let j = 0; j < arr[index].length; j++) {
//       result += arr[index][j];
//     }

//     if (index !== arr.length - 1) {
//       result += " ";
//     }
//   }
//   return result;
// };

// console.log(reverseWords("Let's take LeetCode contest"));

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var intersect = function (nums1, nums2) {
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);

//   const result = [];

//   let one = 0;
//   let two = 0;

//   while (one < nums1.length && two < nums2.length) {
//     const oneValue = nums1[one];
//     const twoValue = nums2[two];
//     if (oneValue === twoValue) {
//       one++;
//       two++;
//       result.push(oneValue);
//     } else if (oneValue < twoValue) {
//       one++;
//     } else {
//       two++;
//     }
//   }
//   return result;
// };

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   let max = 0;

//   let count = 0;
//   for (let index = 0; index < prices.length - 1; index++) {
//     if (prices[index + 1] + count - prices[index] > 0) {
//       count += prices[index + 1] - prices[index];
//     } else {
//       count = 0;
//     }

//     if (max < count) {
//       max = count;
//     }
//   }
//   return max;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

// /**
//  * @param {number[][]} mat
//  * @param {number} r
//  * @param {number} c
//  * @return {number[][]}
//  */
// var matrixReshape = function (mat, r, c) {
//   const eleArr = [];
//   const result = [];

//   for (let i = 0; i < mat.length; i++) {
//     const row = mat[i];
//     for (let j = 0; j < row.length; j++) {
//       eleArr.push(row[j]);
//     }
//   }

//   if (eleArr.length !== r * c) return mat;

//   for (let i = 0; i < r; i++) {
//     const curArr = [];

//     for (let j = i * c; j < i * c + c; j++) {
//       curArr.push(eleArr[j]);
//     }
//     result.push(curArr);
//   }
//   return result;
// };

// console.log(
//   matrixReshape(
//     [
//       [1, 2],
//       [3, 4],
//     ],
//     4,
//     1
//   )
// );
// console.log(
//   matrixReshape(
//     [
//       [1, 2],
//       [3, 4],
//     ],
//     1,
//     4
//   )
// );

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (!numRows) return [];

  const result = [[1]];

  for (let i = 1; i < numRows; i++) {
    const lastArr = result[i - 1];
    const curArr = [];
    for (let j = 0; j < i + 1; j++) {
      const ele = (lastArr[j - 1] || 0) + (lastArr[j] || 0);
      curArr.push(ele);
    }
    result.push(curArr);
  }
  return result;
};

console.log(generate(5));
