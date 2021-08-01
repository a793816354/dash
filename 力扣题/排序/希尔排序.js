const { getRandomArr } = require("../../资源.js");

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// 版本1
// const shellSort = (array) => {
//   let gap = Math.floor(array.length / 2);
//   while (gap >= 1) {
//     for (let index = 0; index < gap; index++) {
//       for (let i = index + gap; i < array.length; i += gap) {
//         for (let j = i; j >= gap; j -= gap) {
//           if (array[j] < array[j - gap]) {
//             swap(array, j, j - gap);
//           }
//         }
//       }
//     }

//     gap = Math.floor(gap / 2);
//   }
//   return array;
// };

// 版本2
const shellSort = (array) => {
  let gap = Math.floor(array.length / 2);
  while (gap >= 1) {
    for (let i = gap; i < array.length; i++) {
      for (let j = i; j >= gap; j -= gap) {
        if (array[j] < array[j - gap]) {
          swap(array, j, j - gap);
        }
      }
    }

    gap = Math.floor(gap / 2);
  }
  return array;
};

const arr = getRandomArr();
console.log(arr);
console.log(shellSort(arr));
