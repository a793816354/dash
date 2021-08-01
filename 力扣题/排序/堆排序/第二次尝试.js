const { getRandomArr } = require("../../../资源.js");

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

//原地
const heapSort = (arr) => {
  buildHeap(arr);
  for (let index = arr.length - 1; index > 0; index--) {
    swap(arr, 0, index);
    heapify(arr, 0, index);
  }
  return arr;
};

const buildHeap = (arr) => {
  const lastParent = Math.floor((arr.length - 1) / 2);

  for (let index = lastParent; index >= 0; index--) {
    heapify(arr, index, arr.length);
  }
  return arr;
};

const heapify = (arr, index, heapSize) => {
  const leftChild = 2 * index + 1;
  const rightChild = leftChild + 1;

  let maxIndex = index;

  if (leftChild < heapSize && arr[leftChild] > arr[maxIndex]) {
    maxIndex = leftChild;
  }

  if (rightChild < heapSize && arr[rightChild] > arr[maxIndex]) {
    maxIndex = rightChild;
  }

  if (maxIndex !== index) {
    swap(arr, index, maxIndex);
    heapify(arr, maxIndex, heapSize);
  }
};

// console.log(heapSort([6, 3, 4, 5, 2, 7, 9, 1]));

const arr = getRandomArr();
console.log(arr);
const start = new Date().valueOf();
console.log(
  heapSort([
    6, 9, 11, 6, 13, 13, 15, 2, 1, 10, 7, 10, 7, 19, 11, 13, 13, 0, 4, 8,
  ])
);
// console.log(heapSort(arr));
// console.log(heapSort(arr));
const end = new Date().valueOf();
console.log(end - start);
