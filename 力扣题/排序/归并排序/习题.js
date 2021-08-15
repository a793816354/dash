/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
//临时数组存储
// var merge = function (A, m, B, n) {
//   const result = [];

//   let one = 0;
//   let two = 0;

//   while (one < m && two < n) {
//     const aVal = A[one];
//     const bVal = B[two];
//     if (aVal < bVal) {
//       result.push(aVal);
//       one++;
//     } else {
//       result.push(bVal);
//       two++;
//     }
//   }

//   while (one < m) {
//     const aVal = A[one];
//     result.push(aVal);
//     one++;
//   }

//   while (two < n) {
//     const bVal = B[two];
//     result.push(bVal);
//     two++;
//   }
//   for (let index = 0; index < result.length; index++) {
//     A[index] = result[index];
//   }
// };

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const insert = (arr, end) => {
  for (let index = end; index > 0; index--) {
    if (arr[index] < arr[index - 1]) {
      swap(arr, index, index - 1);
    } else {
      break;
    }
  }
};

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
//循环插入排序
var merge = function (A, m, B, n) {
  for (let index = m; index < m + n; index++) {
    A[index] = B[index - m];
    insert(A, index);
  }
  return A;
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
