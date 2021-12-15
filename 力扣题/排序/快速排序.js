const getRandomArr = (num = 20) => {
  const result = Array(num)
    .fill(true)
    .map((item) => Math.floor(Math.random() * num));
  return result;
};

// const quickSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);
//   const midVal = arr[mid];

//   //分区
//   const lessArr = [];
//   const moreArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     const ele = arr[index];
//     if (index !== mid) {
//       if (ele < midVal) {
//         lessArr.push(ele);
//       } else {
//         moreArr.push(ele);
//       }
//     }
//   }
//   return quickSort(lessArr).concat([midVal],quickSort(moreArr))
// };

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const partition = (arr, start, end) => {
  let left = start;
  const povit = arr[end];
  for (let index = start; index < end; index++) {
    if (arr[index] <= povit) swap(arr, left++, index);
  }
  return left;
};

const quickSort = (arr, start, end) => {
  if (start > end) return;
  const randomIndex = start + Math.floor(Math.random() * (end - start + 1));
  swap(arr, randomIndex, end);
  const curIndex = partition(arr, start, end);
  swap(arr, curIndex, end);
  quickSort(arr, start, curIndex - 1);
  quickSort(arr, curIndex + 1, end);
};

const sort = (arr) => {
  quickSort(arr, 0, arr.length - 1);
  return arr;
};
const randomArr = getRandomArr();
console.log(randomArr);
console.log(sort(randomArr));
