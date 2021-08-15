const { getRandomArr } = require("../../../资源.js");

const mergeSort = (arr) => {
  const mergeArr = mergeSortFunc(arr, 0, arr.length - 1);
  for (let index = 0; index < mergeArr.length; index++) {
    arr[index] = mergeArr[index];
  }
  return arr;
};

const mergeSortFunc = (arr, start, end) => {
  if (start === end) return [arr[start]];

  const midIndex = start + Math.floor((end - start) / 2);
  const leftArr = mergeSortFunc(arr, start, midIndex);
  const rightArr = mergeSortFunc(arr, midIndex + 1, end);
  const mergeArr = merge(leftArr, rightArr);

  return mergeArr;
};

const merge = (leftArr, rightArr) => {
  const tempArr = [];
  let left = 0;
  let right = 0;
  while (left < leftArr.length && right < rightArr.length) {
    const leftVal = leftArr[left];
    const rightVal = rightArr[right];
    if (leftVal < rightVal) {
      tempArr.push(leftVal);
      left++;
    } else {
      tempArr.push(rightVal);
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

// const arr = [0, 3, 4, 5, 4, 0];
const arr = getRandomArr();
console.log(arr);
console.log(mergeSort(arr));
