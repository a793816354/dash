const { getRandomArr } = require("../../资源.js");

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

//冒泡排序

// const bubbleSort = (arr) => {
//   let lastIndex = arr.length - 1;

//   for (let i = 0; i < arr.length - 1; i++) {
//     let swaped = false;
//     let swapIndex = -1;
//     for (let j = 0; j < lastIndex; j++) {
//       const ele = arr[j];
//       const nextEle = arr[j + 1];
//       if (ele > nextEle) {
//         swap(arr, j, j + 1);
//         swaped = true;
//         swapIndex = j;
//       }
//     }
//     if (!swaped) {
//       break;
//     }
//     lastIndex = swapIndex;
//   }
//   return arr;
// };

// const bubbleSort = (arr) => {
//   let lastIndex = arr.length - 1;
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swaped = false;
//     let swapIndex = -1;

//     for (let j = 0; j < lastIndex; j++) {
//       const ele = arr[j];
//       const nextEle = arr[j + 1];
//       if (ele > nextEle) {
//         swap(arr, j, j + 1);
//         swapIndex = j;
//         swaped = true;
//       }
//     }
//     if (!swaped) break;
//     lastIndex = swapIndex;
//   }
//   return arr;
// };

// const bubbleSort = (arr) => {
//   let lastIndex = arr.length - 1;

//   for (let i = 0; i < arr.length - 1; i++) {
//     let swaped = false;
//     let swapIndex = -1;

//     for (let j = 0; j < lastIndex; j++) {
//       const ele = arr[j];
//       const nextEle = arr[j + 1];
//       if (ele > nextEle) {
//         swap(arr, j, j + 1);
//         swaped = true;
//         swapIndex = j;
//       }
//     }
//     if (!swaped) break;
//     lastIndex = swapIndex;
//   }
//   return arr;
// };

//选择排序
// const selectSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) minIndex = j;
//     }
//     swap(arr, i, minIndex);
//   }
//   return arr;
// };

// const selectSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) minIndex = j;
//     }
//     if (minIndex !== i) swap(arr, i, minIndex);
//   }
//   return arr;
// };

//插入排序
// const insertSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     for (let index = i; index > 0; index--) {
//       const ele = arr[index];
//       const lastEle = arr[index - 1];
//       if (ele > lastEle) break;
//       swap(arr, index, index - 1);
//     }
//   }
//   return arr;
// };

// 堆排序
// const heapSort = (arr) => {
//   buildHeapfy(arr);
//   for (let index = arr.length - 1; index > 0; index--) {
//     swap(arr, 0, index);
//     heapfy(arr, 0, index);
//   }
//   return arr;
// };

// const buildHeapfy = (arr) => {
//   for (let index = Math.floor((arr.length - 1) / 2); index >= 0; index--) {
//     heapfy(arr, index, arr.length);
//   }
// };

// const heapfy = (arr, index, heapSize) => {
//   const leftNode = 2 * index + 1;
//   const rightNode = leftNode + 1;

//   let minIndex = index;

//   if (leftNode < heapSize && arr[leftNode] > arr[minIndex]) {
//     minIndex = leftNode;
//   }
//   if (rightNode < heapSize && arr[rightNode] > arr[minIndex]) {
//     minIndex = rightNode;
//   }

//   if (minIndex !== index) {
//     swap(arr, minIndex, index);
//     heapfy(arr, minIndex, heapSize);
//   }
// };

// const heapSort = (arr) => {
//   buildSort(arr);
//   for (let index = arr.length - 1; index > 0; index--) {
//     swap(arr, 0, index);
//     heapfy(arr, 0, index);
//   }
//   return arr;
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

//   if (minIndex !== index) {
//     swap(arr, index, minIndex);
//     heapfy(arr, minIndex, heapSize);
//   }
// };

//降序
const heapSort = (arr) => {
  buildSort(arr);
  for (let index = arr.length - 1; index > 0; index--) {
    swap(arr, 0, index);
    heapfy(arr, 0, index);
  }
  return arr;
};

const buildSort = (arr) => {
  const lastParentIndex = Math.floor((arr.length - 1) / 2);
  for (let index = lastParentIndex; index >= 0; index--) {
    heapfy(arr, index, arr.length);
  }
};

const heapfy = (arr, index, heapSize) => {
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
    swap(arr, index, minIndex);
    heapfy(arr, minIndex, heapSize);
  }
};
const arr = getRandomArr();
console.log(arr);
console.log(heapSort(arr));
