/**
 * @param {number[][]} points
 * @return {number}
 */
// var findMinArrowShots = function (points) {
//   if (!points.length) return 0;

//   points.sort((a, b) => a[1] - b[1]);
//   const init = points[0][1];
//   let result = 1;

//   for (let index = 1; index < points.length; index++) {
//     let ele = points[index];
//     if (ele[0] > init) {
//       init = ele[1];
//       result++;
//     }
//   }
//   return result;
// };

//贪心思路：第一个元素排序，第二个元素尽可能小
// 若第二个小，则删除第一个（跳过即可）
// 若第一个小，则删除第二个（覆盖即可）
//自己尝试
var eraseOverlapIntervals = function (points) {
  if (!points.length) return;
  let result = 0;

  points.sort((a, b) => a[0] - b[0]);
  for (let index = 0; index < points.length - 1; index++) {
    const point = points[index];
    const nextPoint = points[index + 1];

    if (point[1] > nextPoint[1]) {
      result++;
      continue;
    } else if (
      (point[1] > nextPoint[0] && point[1] <= nextPoint[1]) ||
      (point[0] === nextPoint[0] && point[1] === nextPoint[1])
    ) {
      points.splice(index + 1, 1);
      index--;
      result++;
    }
  }
  return result;
};

//自己尝试-优化   速度提升非常多，几乎拉满
var eraseOverlapIntervals = function (points) {
  if (!points.length) return;
  let result = 0;

  points.sort((a, b) => a[0] - b[0]);
  for (let index = 0; index < points.length - 1; index++) {
    const point = points[index];
    const nextPoint = points[index + 1];

    if (point[1] > nextPoint[1]) {
      result++;
      continue;
    } else if (
      (point[1] > nextPoint[0] && point[1] <= nextPoint[1]) ||
      (point[0] === nextPoint[0] && point[1] === nextPoint[1])
    ) {
      nextPoint[1] = point[1];
      result++;
    }
  }
  return result;
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
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
  ])
);
