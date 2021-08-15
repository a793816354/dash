const { getRandomArr } = require("../../../资源.js");

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const quickSort = (arr) => {
  quickSortFunc(arr, 0, arr.length - 1);
  return arr;
};

const quickSortFunc = (arr, start, end) => {
  if (start >= end) return;

  const middleIndex = getMiddle(arr, start, end);

  // 对左边区域快速排序
  quickSortFunc(arr, start, middleIndex - 1);
  // 对右边区域快速排序
  quickSortFunc(arr, middleIndex + 1, end);
};

const getMiddle = (arr, start, end) => {
  const middleIndex = start + Math.floor(Math.random() * (end - start));
  const midVal = arr[middleIndex];

  let left = start;
  let right = end;
  while (left < right) {
    // // 找到第一个大于基数的位置
    // while (left < right && arr[left] <= midVal) left++;
    // // 找到第一个小于基数的位置
    // while (left < right && arr[right] >= midVal) right--;
    // // 交换这两个数，使得左边分区都小于或等于基数，右边分区大于或等于基数
    // if (left < right) {
    //   swap(arr, left, right);
    //   left++;
    //   right--;
    // }

    const leftVal = arr[left];
    const rightVal = arr[right];
    if (leftVal <= midVal) {
      left++;
    }

    if (rightVal >= midVal) {
      right--;
    }

    if (leftVal > midVal && rightVal < midVal) {
      swap(arr, left, right);
      left++;
      right--;
    }
    console.log("dsadsadsa");
    console.log(left);
    console.log(right);
  }
  console.log(left === right);
  console.log(middleIndex);
  console.log(left);
  console.log(right);

  if (left == right && arr[right] > midVal) right--;
  // const realMid = Math.floor((left + right) / 2);
  swap(arr, middleIndex, right);
  console.log(arr);
  return right;
};

// const arr = getRandomArr(6);
const arr = [0, 3, 4, 5, 4, 0];
console.log(arr);
console.log(quickSort(arr));
