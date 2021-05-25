const { getSortArr } = require("../../资源.js");
const arr = getSortArr(100);
console.log(arr);

// 验证
const normalSearch = (target) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) {
      return index;
    }
  }
  return -1;
};

const binarySearch = (target) => {
  let start = 0;
  let end = arr.length - 1;

  while (end > start) {
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) {
      end = mid;
    }

    if (target > arr[mid]) {
      start = mid + 1;
    }

    if (target < arr[mid]) {
      end = mid - 1;
    }
  }

  if (arr[start] === target) {
    return start;
  }

  return -1;
};

console.log(normalSearch(77));
console.log(binarySearch(77));
