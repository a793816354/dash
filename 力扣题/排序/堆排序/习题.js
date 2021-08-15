const { getRandomArr } = require("../../../资源.js");

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//   buildSort(nums);
//   for (let index = nums.length - 1; index > nums.length - k; index--) {
//     swap(nums, 0, index);
//     heapfy(nums, 0, index);
//   }
//   return nums[0];
// };

// const buildSort = (arr) => {
//   const lastParentIndex = Math.floor((arr.length - 1) / 2);
//   for (let index = lastParentIndex; index >= 0; index--) {
//     heapfy(arr, index, arr.length);
//   }
// };

// const heapfy = (arr, index, heapSize) => {
//   let leftIndex = index * 2 + 1;
//   let rightIndex = leftIndex + 1;

//   let minIndex = index;
//   if (leftIndex < heapSize && arr[leftIndex] > arr[minIndex]) {
//     minIndex = leftIndex;
//   }
//   if (rightIndex < heapSize && arr[rightIndex] > arr[minIndex]) {
//     minIndex = rightIndex;
//   }

//   if (index !== minIndex) {
//     swap(arr, index, minIndex);
//     heapfy(arr, minIndex, heapSize);
//   }
// };

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  const result = [];
  buildHeap(arr);
  for (let index = arr.length - 1; index >= 0; index--) {
    if (k > 0) {
      result.push(arr[0]);
      k--;
    } else {
      break;
    }

    swap(arr, 0, index);
    heapify(arr, 0, index);
  }

  return result;
};

const buildHeap = (arr) => {
  const lastParentIndex = Math.floor((arr.length - 1) / 2);
  for (let index = lastParentIndex; index >= 0; index--) {
    heapify(arr, index, arr.length);
  }
};

const heapify = (arr, index, heapSize) => {
  let leftIndex = index * 2 + 1;
  let rightIndex = leftIndex + 1;

  let minIndex = index;
  if (leftIndex < heapSize && arr[leftIndex] < arr[minIndex]) {
    minIndex = leftIndex;
  }
  if (rightIndex < heapSize && arr[rightIndex] < arr[minIndex]) {
    minIndex = rightIndex;
  }
  if (minIndex !== index) {
    swap(arr, minIndex, index);
    heapify(arr, minIndex, heapSize);
  }
};

// const arr = getRandomArr();
// console.log(arr);
console.log(getLeastNumbers([3, 2, 1], 2));
console.log(getLeastNumbers([0, 0, 2, 3, 2, 1, 1, 2, 0, 4], 10));
