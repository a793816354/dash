// var findMinArrowShots = function (points) {
//   if (!points.length) {
//     return 0;
//   }

//   points.sort((a, b) => a[1] - b[1]);
//   console.log(points);
//   let pos = points[0][1];
//   let ans = 1;
//   for (let balloon of points) {
//     if (balloon[0] > pos) {
//       pos = balloon[1];
//       ans++;
//     }
//   }
//   return ans;
// };

//思路：最少的箭引爆=》找出重叠区间
var findMinArrowShots = function (points) {
  if (!points.length) {
    return 0;
  }

  points.sort((a, b) => a[1] - b[1]);
  let result = 0;

  for (let index = points.length - 1; index > 0; index--) {
    const point = points[index];
    const lastPoint = points[index - 1];

    if (point[0] <= lastPoint[1]) {
      result++;

      if (point[0] > lastPoint[0]) {
        lastPoint[0] = point[0];
      }
    }
  }
  return points.length - result;
};
// console.log(
//   findMinArrowShots([
//     [1, 6],
//     [2, 8],
//     [7, 12],
//     [10, 16],
//   ])
// );
console.log(
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
);
// console.log(
//   findMinArrowShots([
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [4, 5],
//   ])
// );
// console.log(
//   findMinArrowShots([
//     [3, 9],
//     [7, 12],
//     [3, 8],
//     [6, 8],
//     [9, 10],
//     [2, 9],
//     [0, 9],
//     [3, 9],
//     [0, 6],
//     [2, 8],
//   ])
// );
// console.log(
//   findMinArrowShots([
//     [9, 12],
//     [1, 10],
//     [4, 11],
//     [8, 12],
//     [3, 9],
//     [6, 9],
//     [6, 7],
//   ])
// );
// console.log(
//   findMinArrowShots([
//     [7, 15],
//     [6, 14],
//     [8, 12],
//     [3, 4],
//     [4, 13],
//     [6, 14],
//     [9, 11],
//     [6, 12],
//     [4, 13],
//   ])
// );
// console.log(
//   findMinArrowShots([
//     [1, 2],
//     [4, 5],
//     [1, 5],
//   ])
// );
