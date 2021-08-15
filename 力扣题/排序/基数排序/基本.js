const { getRandomArr, isSorted } = require("../../../资源.js");

// const getRadix = (num) => {
//   let radix = 1;
//   while (num / 10 >= 1) {
//     radix++;
//     num /= 10;
//   }
//   return radix;
// };

// const radixSort = (arr) => {
//   const bucket = [];
//   let maxNum = arr[0];
//   let maxRadix = getRadix(maxNum);
//   for (let index = 1; index < arr.length; index++) {
//     if (maxNum < arr[index]) {
//       maxNum = arr[index];
//       maxRadix = getRadix(maxNum);
//     }
//   }

//   for (let i = 0; i < maxRadix; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       const ele = arr[j];
//       const eleStr = `${ele}`;

//       const curRadixEle = eleStr[eleStr.length - 1 - i] || 0;
//       if (bucket[curRadixEle]) {
//         bucket[curRadixEle].push(ele);
//       } else {
//         bucket[curRadixEle] = [ele];
//       }
//     }

//     let arrIndex = 0;
//     for (let index = 0; index < bucket.length; index++) {
//       const curCell = bucket[index];
//       while (curCell && curCell.length) {
//         arr[arrIndex] = curCell.shift();
//         arrIndex++;
//       }
//     }
//   }
//   return arr;
// };

const arr = getRandomArr();
// const arr = [0, 3, 4, 5, 4, 0];
console.log(arr);
console.log(radixSort(arr));
console.log(isSorted(radixSort(arr)));
