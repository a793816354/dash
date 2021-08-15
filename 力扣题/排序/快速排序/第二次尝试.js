const { getRandomArr } = require("../../../资源.js");

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const quickSort = (arr) => {
  quickSortFunc(arr, 0, arr.length - 1);
  return arr;
};

const quickSortFunc = (arr, start, end) => {
  if (start >= end) return;

  const midIndex = getMid(arr, start, end);

  quickSortFunc(arr, start, midIndex - 1);
  quickSortFunc(arr, midIndex + 1, end);
};

const getMid = (arr, start, end) => {
  const pivotIndex = start + Math.floor(Math.random() * (end - start));
  //   const pivot = arr[pivotIndex];
  swap(arr, pivotIndex, start);
  const pivot = arr[start];
  let left = start + 1;
  let right = end;

  while (left < right) {
    while (left < right && arr[left] <= pivot) {
      left++;
    }
    while (left < right && arr[right] >= pivot) {
      right--;
    }

    if (left < right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  if (left == right && arr[right] > pivot) right--;
  swap(arr, start, right);

  return right;
};

const arr = getRandomArr();
// const arr = [0, 3, 4, 5, 4, 0];
console.log(arr);
console.log(quickSort(arr));
