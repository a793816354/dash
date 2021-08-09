/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function (intervals) {
//   if (!intervals.length) return [];

//   intervals.sort((a, b) => b[1] - a[1]);
//   const result = [intervals[0]];
//   for (let index = 0; index < intervals.length; index++) {
//     const ele = intervals[index];
//     const lastRange = result[result.length - 1];
//     if (ele[1] < lastRange[0]) {
//       result.push(ele);
//     } else if (ele[0] < lastRange[0]) {
//       lastRange[0] = ele[0];
//     }
//   }
//   return result;
// };

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function (intervals) {
//   if (!intervals.length) {
//     return 0;
//   }

//   intervals.sort((a, b) => a[0] - b[0]);

//   for (let index = 0; index < intervals.length - 1; index++) {
//     const point = intervals[index];
//     const nextPoint = intervals[index + 1];
//     if (point[1] >= nextPoint[0]) {
//       nextPoint[0] = point[0];
//       if (point[1] > nextPoint[1]) {
//         nextPoint[1] = point[1];
//       }

//       intervals.splice(index, 1);
//       index--;
//     }
//   }

//   return intervals;
// };

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 优化,速度提升很多
// var merge = function (intervals) {
//   if (!intervals.length) {
//     return 0;
//   }
//   const set = new Set();
//   const result = [];
//   intervals.sort((a, b) => a[0] - b[0]);

//   for (let index = 0; index < intervals.length - 1; index++) {
//     const point = intervals[index];
//     const nextPoint = intervals[index + 1];
//     if (point[1] >= nextPoint[0]) {
//       nextPoint[0] = point[0];
//       if (point[1] > nextPoint[1]) {
//         nextPoint[1] = point[1];
//       }

//       set.add(index);
//     }
//   }

//   for (let index = 0; index < intervals.length; index++) {
//     if (!set.has(index)) {
//       result.push(intervals[index]);
//     }
//   }

//   return result;
// };

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 优化,使用result最后一个节点进行比较和合并，速度同样提升很多
var merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let index = 0; index < intervals.length; index++) {
    const point = intervals[index];
    const lastPoint = result[result.length - 1];
    if (!lastPoint || point[0] > lastPoint[1]) {
      result.push(point);
    } else {
      const [start, end] = lastPoint;
      result[result.length - 1] = [start, Math.max(point[1], lastPoint[1])];
    }
  }

  return result;
};

console.log(
  merge([
    [1, 4],
    [5, 6],
  ])
);
// console.log(
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );
// console.log(
//   merge([
//     [1, 4],
//     [0, 2],
//     [3, 5],
//   ])
// );
// console.log(
//   merge([
//     [2, 3],
//     [4, 5],
//     [6, 7],
//     [8, 9],
//     [1, 10],
//   ])
// );
