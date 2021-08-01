const { getRandomArr } = require("../../资源.js");

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

//基本
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// };

// 优化
// const bubbleSort = (arr) => {
//   let lastIndex = arr.length - 1;

//   for (let i = 0; i < arr.length - 1; i++) {
//     let flag = false;
//     let temp = -1;
//     for (let j = 0; j < lastIndex; j++) {
//       if (arr[j] > arr[j + 1]) {
//         flag = true;
//         swap(arr, j, j + 1);
//         temp = j;
//       }
//     }

//     if (!flag) break;
//     lastIndex = temp;
//   }
//   return arr;
// };

// const bubbleSort = (arr) => {
//   let lastIndex = arr.length - 1;

//   for (let i = 0; i < arr.length; i++) {
//     let flag = false;
//     let swapIndex = -1;
//     for (let j = 0; j < lastIndex; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         flag = true;
//         swapIndex = j;
//       }
//     }
//     if (!flag) break;
//     lastIndex = swapIndex;
//   }
//   return arr;
// };

// const bubbleSort = (arr) => {
//   let lastIndex = arr.length - 1;
//   for (let i = 0; i < arr.length; i++) {
//     let flag = false;
//     let swapIndex = -1;
//     for (let j = 0; j < lastIndex; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         flag = true;
//         swapIndex = j;
//       }
//     }
//     if (!flag) break;
//     lastIndex = swapIndex;
//   }
//   return arr;
// };

const bubbleSort = (arr) => {
  let lastIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    let swapIndex = -1;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        flag = true;
        swapIndex = j;
      }
    }
    if (!flag) break;
    lastIndex = swapIndex;
  }
  return arr;
};

const arr = getRandomArr();
console.log(arr);
console.log(bubbleSort(arr));
