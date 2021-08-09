/**
 * @param {number[]} nums
 * @return {number}
 */
// bf 时间太长
// var reversePairs = function (nums) {
//   let result = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const cur = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       const ele = nums[j];

//       if (cur > ele) result++;
//     }
//   }
//   return result;
// };

const binarySearch = (arr, target) => {
  //   console.log(arr);
  //   console.log(target);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      right = mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (arr[left] === target) return left;
  return -1;
};

//先排序，再找到元素位置，对比偏移量,但由于还是每次都使用slice生成新的数组，所以比较慢，考虑直接用
// index进行排序和二分查找
var reversePairs = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const arr = nums.slice(i, nums.length);
    arr.sort((a, b) => a - b);
    result += binarySearch(arr, cur);
  }
  return result;
};

console.log(reversePairs([7, 5, 6, 4]));
console.log(reversePairs([1, 1, 1, 1, 1]));
