const { getRandomArr } = require("../../../资源.js");

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       const ele = arr[j];
//       if (arr[minIndex] > ele) {
//         minIndex = j;
//       }
//     }
//     swap(arr, i, minIndex);
//   }
//   return arr;
// };

//重写
// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }
//     swap(arr, minIndex, i);
//   }
//   return arr;
// };

//重写
// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }
//     swap(arr, minIndex, i);
//   }
//   return arr;
// };

// //重写
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    swap(arr, minIndex, i);
  }
  return arr;
};

const arr = getRandomArr();
console.log(arr);
console.log(selectionSort(arr));
