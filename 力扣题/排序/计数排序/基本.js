const { getRandomArr, isSorted } = require("../../../资源.js");

// 伪 ,缺点：复数，小数不能排
// const countingSort = (arr) => {
//   const maxNum = Math.max(...arr);
//   const temp = Array(maxNum + 1).fill(0);
//   const result = [];

//   for (let index = 0; index < arr.length; index++) {
//     temp[arr[index]]++;
//   }

//   for (let index = 0; index < temp.length; index++) {
//     if (temp[index]) {
//       result.push(index);
//       temp[index]--;
//       index--;
//     }
//   }
//   return result;
// };
//用map, 缺点：复数，小数不能排
const countingSort = (arr) => {
  const temp = {};
  const result = [];

  for (let index = 0; index < arr.length; index++) {
    if (temp[arr[index]]) {
      temp[arr[index]]++;
    } else {
      temp[arr[index]] = 1;
    }
  }
  for (const key in temp) {
    for (let index = 0; index < temp[key]; index++) {
      result.push(key);
    }
  }
  return result;
};

// const arr = getRandomArr();
const arr = [5, 1, 1, 2, 0, 0];
console.log(arr);
console.log(countingSort(arr));
console.log(isSorted(countingSort(arr)));
