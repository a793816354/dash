const { getRandomArr, isSorted } = require("../../../资源.js");

// const mergeSort = (arr) => {
//   const sortedArr = mergeSortFunc(arr, 0, arr.length - 1);
//   for (let index = 0; index < sortedArr.length; index++) {
//     arr[index] = sortedArr[index];
//   }
//   return arr;
// };

// const mergeSortFunc = (arr, start, end) => {
//   if (start === end) return [arr[start]];
//   const midIndex = start + Math.floor((end - start) / 2);

//   const leftArr = mergeSortFunc(arr, start, midIndex);
//   const rightArr = mergeSortFunc(arr, midIndex + 1, end);
//   return merge(leftArr, rightArr);
// };

// const merge = (leftArr, rightArr) => {
//   let left = 0;
//   let right = 0;
//   const tempArr = [];

//   while (left < leftArr.length && right < rightArr.length) {
//     const leftVal = leftArr[left];
//     const rightVal = rightArr[right];
//     if (leftVal < rightVal) {
//       tempArr.push(leftVal);
//       left++;
//     } else {
//       tempArr.push(rightVal);
//       right++;
//     }
//   }
//   while (left < leftArr.length) {
//     const leftVal = leftArr[left];
//     tempArr.push(leftVal);
//     left++;
//   }
//   while (right < rightArr.length) {
//     const rightVal = rightArr[right];
//     tempArr.push(rightVal);
//     right++;
//   }
//   return tempArr;
// };

const mergeSort = (arr) => {
  const sortedArr = mergeSortFunc(arr, 0, arr.length - 1);
  for (let index = 0; index < sortedArr.length; index++) {
    arr[index] = sortedArr[index];
  }
  return arr;
};

const mergeSortFunc = (arr, start, end) => {
  if (start === end) return [arr[start]];
  const midIndex = start + Math.floor((end - start) / 2);
  const leftArr = mergeSortFunc(arr, start, midIndex);
  const rightArr = mergeSortFunc(arr, midIndex + 1, end);
  return merge(leftArr, rightArr);
};

const merge = (leftArr, rightArr) => {
  let left = 0;
  let right = 0;
  const tempArr = [];
  while (left < leftArr.length && right < rightArr.length) {
    if (leftArr[left] < rightArr[right]) {
      tempArr.push(leftArr[left]);
      left++;
    } else {
      tempArr.push(rightArr[right]);
      right++;
    }
  }
  while (left < leftArr.length) {
    tempArr.push(leftArr[left]);
    left++;
  }
  while (right < rightArr.length) {
    tempArr.push(rightArr[right]);
    right++;
  }
  return tempArr;
};

const arr = getRandomArr();
// const arr = [0, 3, 4, 5, 4, 0];
console.log(arr);
console.log(mergeSort(arr));
console.log(isSorted(arr));
