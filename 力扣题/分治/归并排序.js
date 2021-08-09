// 归并排序：无脑拆分左右

// 组织左右数组
// const sort = (arr) => {
//   if (arr.length <= 2) {
//     if (arr.length <= 1) return arr;

//     const [first, second] = arr;
//     return first < second ? [first, second] : [second, first];
//   }
//   const midValue = arr[0];
//   const leftArr = [];
//   const rightArr = [];
//   for (let index = 1; index < arr.length; index++) {
//     const ele = arr[index];
//     if (ele < midValue) {
//       leftArr.push(ele);
//     } else {
//       rightArr.push(ele);
//     }
//   }

//   return sort(leftArr).concat([arr[0]]).concat(sort(rightArr));
// };

const getRandomArr = (num = 20) => {
  const result = Array(num)
    .fill(true)
    .map((item) => Math.floor(Math.random() * num));
  return result;
};

// 不组织数组，而是使用左右index
const sort = (arr, left, right) => {
  const midValue = arr[Math.floor((right - left) / 2)];
};

const arr = getRandomArr();
console.log(arr);
console.log(sort(arr));
