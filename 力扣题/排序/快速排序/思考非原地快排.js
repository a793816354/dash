const { getRandomArr, isSorted } = require("../../../资源.js");

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

// const quickSort = (arr) => {
//   if (arr.length <= 2) {
//     if (arr.length === 2) {
//       const [first, second] = arr;
//       return first > second ? [second, first] : arr;
//     }
//     return arr;
//   }

//   const randomIndex = Math.floor((arr.length - 1) * Math.random());
//   const pivot = arr[randomIndex];
//   const leftArr = [];
//   const rightArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     if (index !== randomIndex) {
//       if (arr[index] <= pivot) {
//         leftArr.push(arr[index]);
//       } else {
//         rightArr.push(arr[index]);
//       }
//     }
//   }

//   return quickSort(leftArr).concat([pivot]).concat(quickSort(rightArr));
// };

const quickSort = (arr) => {
  if (arr.length <= 2) {
    if (arr.length === 2) {
      const [first, second] = arr;
      return first > second ? [second, first] : arr;
    }
    return arr;
  }

  const randomIndex = Math.floor((arr.length - 1) * Math.random());
  const pivot = arr[randomIndex];
  const leftArr = [];
  const rightArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (index !== randomIndex) {
      if (arr[index] <= pivot) {
        leftArr.push(arr[index]);
      } else {
        rightArr.push(arr[index]);
      }
    }
  }
  const left = quickSort(leftArr);
  const right = quickSort(rightArr);
  const result = [];
  for (let index = 0; index < left.length; index++) {
    result.push(left[index]);
  }
  result.push(pivot);
  for (let index = 0; index < right.length; index++) {
    result.push(right[index]);
  }

  return result;
};

const arr = getRandomArr();
// const arr = [0, 3, 4, 5, 4, 0];
console.log(arr);
console.log(quickSort(arr));
console.log(isSorted(quickSort(arr)));
