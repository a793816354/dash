const { getRandomArr, swap, isSorted } = require("../../资源");

// const merge = (leftArr, rightArr) => {
//     const result = []
//     let left = 0
//     let right = 0
//     while (left < leftArr.length || right < rightArr.length) {
//         if (rightArr[right] === undefined || leftArr[left] < rightArr[right]) {
//             result.push(leftArr[left++])
//         } else {
//             result.push(rightArr[right++])
//         }
//     }
//     return result
// }

// const mergeSort = (arr, start, end) => {
//     if (end - start <= 1) {
//         if (end === start) {
//             return [arr[start]]
//         }
//         return [Math.min(arr[start], arr[end]), Math.max(arr[start], arr[end])]
//     }

//     const midIndex = start + Math.floor((end - start) / 2)
//     const leftArr = mergeSort(arr, start, midIndex)
//     const rightArr = mergeSort(arr, midIndex + 1, end)
//     return merge(leftArr, rightArr)
// }

// const sort = (arr) => {
//     return mergeSort(arr, 0, arr.length - 1)
// }

// const merge = (arr, start, mid, end) => {
//     const temp = []
//     let left = start
//     let right = mid + 1
//     while (left <= mid || right <= end) {
//         if (left > mid) {
//             temp.push(arr[right++])
//         } else if (right > end) {
//             temp.push(arr[left++])
//         } else if (arr[left] < arr[right]) {
//             temp.push(arr[left++])
//         } else {
//             temp.push(arr[right++])
//         }
//     }
//     // console.log(start, mid, end, temp);
//     for (let index = 0; index < temp.length; index++) {
//         arr[start + index] = temp[index]
//     }
// }

// const mergeSort = (arr, start, end) => {
//     if (start === end) return
//     const mid = start + Math.floor((end - start) / 2)
//     mergeSort(arr, start, mid)
//     mergeSort(arr, mid + 1, end)
//     merge(arr, start, mid, end)
// }

// const sort = (arr) => {
//     mergeSort(arr, 0, arr.length - 1)
//     return arr
// }

// const merge = (arr, start, mid, end, temp) => {
//   let left = start;
//   let right = mid + 1;
//   let index = start;
//   while (left <= mid || right <= end) {
//     if (left > mid) {
//       temp[index++] = arr[right++];
//     } else if (right > end) {
//       temp[index++] = arr[left++];
//     } else if (arr[left] < arr[right]) {
//       temp[index++] = arr[left++];
//     } else {
//       temp[index++] = arr[right++];
//     }
//   }
//   //   console.log(temp);
//   for (let index = start; index <= end; index++) {
//     arr[index] = temp[index];
//   }
// };

// const mergeSort = (arr, start, end, temp) => {
//   if (start === end) return;
//   const mid = start + Math.floor((end - start) / 2);
//   mergeSort(arr, start, mid, temp);
//   mergeSort(arr, mid + 1, end, temp);
//   merge(arr, start, mid, end, temp);
// };

// const sort = (arr) => {
//   const temp = [];
//   mergeSort(arr, 0, arr.length - 1, temp);
//   return arr;
// };

const merge = (arr, start, mid, end, temp) => {
  let left = start;
  let right = mid + 1;
  let index = start;
  while (left <= mid && right <= end) {
    if (arr[left] <= arr[right]) {
      temp[index++] = arr[left++];
    } else {
      temp[index++] = arr[right++];
    }
  }
  while (left <= mid) {
    temp[index++] = arr[left++];
  }
  while (right <= end) {
    temp[index++] = arr[right++];
  }

  for (let index = start; index <= end; index++) {
    arr[index] = temp[index];
  }
};

const mergeSort = (arr, start, end, temp) => {
  if (start === end) return;
  const mid = start + Math.floor((end - start) / 2);
  mergeSort(arr, start, mid, temp);
  mergeSort(arr, mid + 1, end, temp);
  merge(arr, start, mid, end, temp);
};

const sort = (arr) => {
  const temp = [];
  mergeSort(arr, 0, arr.length - 1, temp);
  return arr;
};

const randomArr = getRandomArr();
console.log(randomArr);
console.log(sort(randomArr));
// console.log(isSorted(sort(randomArr)));
console.log(isSorted(randomArr));
