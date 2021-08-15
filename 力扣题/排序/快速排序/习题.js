// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function (nums) {
//   const map = {};
//   const half = nums.length / 2;

//   for (let index = 0; index < nums.length; index++) {
//     const ele = nums[index];
//     if (map[ele]) {
//       map[ele]++;
//     } else {
//       map[ele] = 1;
//     }

//     if (map[ele] > half) return ele;
//   }
// };

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  const midIndex = Math.floor(nums.length / 2);
  return nums[midIndex];
};

const quickSort = (arr, start, end) => {
  if (start >= end) return;
  const midIndex = getMid(arr, start, end);
  quickSort(arr, start, midIndex - 1);
  quickSort(arr, midIndex + 1, end);
};

const getMid = (arr, start, end) => {
  const pviotIndex = start + Math.floor(Math.random() * (end - start));
  swap(arr, start, pviotIndex);
  const pviot = arr[start];
  let left = start + 1;
  let right = end;

  while (left < right) {
    while (left < right && arr[left] <= pviot) {
      left++;
    }
    while (left < right && arr[right] >= pviot) {
      right--;
    }

    if (left < right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  if (right === left && arr[right] > pviot) right--;
  swap(arr, start, right);
  return right;
};

majorityElement([3, 2, 3]);
