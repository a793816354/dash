const { getRandomArr } = require("../../../资源.js");

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

//非原地
const heapSort = (arr) => {
  const result = [];
  const length = arr.length;
  for (let index = 0; index < length; index++) {
    const res = maxHeapify(arr, 0, arr.length - 1);
    arr = res.slice(1);
    result.push(res[0]);
  }

  return result;
};

const maxHeapify = (arr, startIndex, index) => {
  const isRight = index % 2 === 0;
  const parentIndex = isRight ? (index - 2) / 2 : (index - 1) / 2;

  if (arr[2 * index + 1] !== undefined && arr[index] < arr[2 * index + 1]) {
    swap(arr, index, 2 * index + 1);
  }

  if (arr[2 * index + 2] !== undefined && arr[index] < arr[2 * index + 2]) {
    swap(arr, index, 2 * index + 2);
  }

  if (parentIndex < 0) return arr;

  if (parentIndex) {
    maxHeapify(arr, startIndex, parentIndex + 1);
  }

  return maxHeapify(arr, startIndex, parentIndex);
};

// console.log(heapSort([6, 3, 4, 5, 2, 7, 9, 1]));

const arr = getRandomArr(10000);
console.log(arr);
const start = new Date().valueOf();
console.log(heapSort(arr));
const end = new Date().valueOf();
console.log(end - start);
