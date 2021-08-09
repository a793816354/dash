const { getRandomArr } = require("../../../资源.js");

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

//标准
const heapSort = (arr) => {};

const maxHeapify = (arr, startIndex, index) => {};

// console.log(heapSort([6, 3, 4, 5, 2, 7, 9, 1]));

const arr = getRandomArr(10000);
console.log(arr);
const start = new Date().valueOf();
console.log(heapSort(arr));
const end = new Date().valueOf();
console.log(end - start);
