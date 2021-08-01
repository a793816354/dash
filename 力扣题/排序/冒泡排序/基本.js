const { getRandomArr } = require("../../../资源.js");

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

//基本
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 1; j < arr.length - i; j++) {
//       if (arr[j] < arr[j - 1]) {
//         swap(arr, j, j - 1);
//       }
//     }
//   }
//   return arr;
// };

// 小优化，当某次内一次都没交换过则证明已经排序好了
const bubbleSort = (arr) => {
  let lastIndex = arr.length;
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = false;
    let temp = 0;
    for (let j = 0; j < lastIndex; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
        temp = j;
        flag = true;
      }
    }

    lastIndex = temp;
    if (!flag) break;
  }
  return arr;
};

const arr = getRandomArr();
console.log(arr);
console.log(bubbleSort(arr));
