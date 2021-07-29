/**
 * @param {number[][]} intervals
 * @return {number}
 */
// 1.第一个元素排序，始终选择占区间最小的元素做基准
// 2.反向思考：移除的区间最少，即保留的区间最多，则可以计算最多保留，再减

// 1.
// var eraseOverlapIntervals = function (intervals) {
//   let result = 0;
//   intervals.sort((a, b) => a[1] - b[1]);

//   for (let index = intervals.length - 1; index > 0; index--) {
//     const range = intervals[index];
//     const lastRange = intervals[index - 1];
//     if (
//       range[0] < lastRange[1] ||
//       (range[0] === lastRange[0] && range[1] === lastRange[1])
//     ) {
//       if (range[0] > lastRange[0]) {
//         lastRange[0] = range[0];
//       }

//       result++;
//     }
//   }
//   return result;
// };

//找出尽量能保留的
var eraseOverlapIntervals = function (intervals) {
  let result = 1;
  intervals.sort((a, b) => a[1] - b[1]);

  for (let index = intervals.length - 1; index > 0; index--) {
    const range = intervals[index];
    const lastRange = intervals[index - 1];

    if (range[0] >= lastRange[1]) {
      result++;
    } else if (range[0] > lastRange[0]) {
      lastRange[0] = range[0];
    }
  }

  return intervals.length - result;
};
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
console.log(
  eraseOverlapIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ])
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);
