const { getRandomArr, isSorted } = require("../../../资源.js");

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

// const quickSort = (arr) => {
//   quickSortFunc(arr, 0, arr.length - 1);
//   return arr;
// };

// const quickSortFunc = (arr, start, end) => {
//   if (start >= end) return;
//   const midIndex = getMid(arr, start, end);
//   quickSortFunc(arr, start, midIndex - 1);
//   quickSortFunc(arr, midIndex + 1, end);
// };

// const getMid = (arr, start, end) => {
//   const randomIndex = start + Math.floor(Math.random() * (end - start));
//   swap(arr, randomIndex, start);
//   const povit = arr[start];
//   let left = start + 1;
//   let right = end;

//   while (left < right) {
//     while (left < right && arr[left] <= povit) {
//       left++;
//     }
//     while (left < right && arr[right] >= povit) {
//       right--;
//     }
//     if (left < right) {
//       swap(arr, left, right);
//       left++;
//       right--;
//     }
//   }
//   if (left === right && arr[right] > povit) {
//     right--;
//   }
//   swap(arr, start, right);
//   return right;
// };

// const quickSort = (arr) => {
//   quickSortFunc(arr, 0, arr.length - 1);
//   return arr;
// };
// const quickSortFunc = (arr, start, end) => {
//   if (start >= end) return;
//   const mid = getMid(arr, start, end);
//   quickSortFunc(arr, start, mid - 1);
//   quickSortFunc(arr, mid + 1, end);
// };
// const getMid = (arr, start, end) => {
//   const randomIndex = start + Math.floor(Math.random() * (end - start));
//   swap(arr, start, randomIndex);
//   const povit = arr[start];
//   let left = start + 1;
//   let right = end;
//   while (left < right) {
//     while (left < right && arr[left] <= povit) left++;
//     while (left < right && arr[right] >= povit) right--;
//     if (left < right) {
//       swap(arr, left, right);
//       left++;
//       right--;
//     }
//   }
//   if (left === right && arr[right] > povit) {
//     right--;
//   }
//   swap(arr, start, right);
//   return right;
// };

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) return;

  const randomIndex = Math.floor(start + Math.random() * (end - start));
  swap(arr, start, randomIndex);
  const povit = arr[start];
  let left = start + 1;
  let right = end;
  while (left < right) {
    while (left < right && arr[left] <= povit) left++;
    while (left < right && arr[right] >= povit) right--;
    if (left < right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  if (left === right && arr[right] > povit) {
    right--;
  }
  swap(arr, start, right);
  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
  return arr;
};

const arr = getRandomArr();
// const arr = [0, 3, 4, 5, 4, 0];
console.log(arr);
console.log(quickSort(arr));
console.log(isSorted(arr));
