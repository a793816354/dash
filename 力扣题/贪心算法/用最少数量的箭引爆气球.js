// /**
//  * @param {number[][]} points
//  * @return {number}
//  */
// var findMinArrowShots = function (points) {
//   if (!points.length) return 0;

//   points.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));
//   console.log(points);
//   const result = [points[0]];
//   for (let i = 1; i < points.length; i++) {
//     const point = points[i];
//     console.log(result);
//     let flag = true;
//     for (let j = 0; j < result.length; j++) {
//       const ele = result[j];

//       if (point[0] >= ele[0] && point[0] <= ele[1]) {
//         ele[0] = point[0];

//         if (ele[1] >= point[1]) {
//           ele[1] = point[1];
//         }
//         flag = false;
//         break;
//       } else if (point[1] >= ele[0] && point[1] <= ele[1]) {
//         ele[1] = point[1];

//         if (ele[0] <= point[0]) {
//           ele[0] = point[0];
//         }
//         flag = false;
//         break;
//       } else if (ele[0] >= point[0] && ele[0] <= point[1]) {
//         if (ele[1] >= point[1]) {
//           ele[1] = point[1];
//         }
//         flag = false;
//         break;
//       } else if (ele[1] >= point[0] && ele[1] <= point[1]) {
//         if (ele[0] <= point[0]) {
//           ele[0] = point[0];
//         }
//         flag = false;
//         break;
//       }
//     }
//     if (flag) {
//       result.push(point);
//     }
//   }
//   console.log(result);
//   return result.length;
// };

var findMinArrowShots = function (points) {
  if (!points.length) {
    return 0;
  }

  points.sort((a, b) => a[1] - b[1]);
  console.log(points);
  let pos = points[0][1];
  let ans = 1;
  for (let balloon of points) {
    if (balloon[0] > pos) {
      pos = balloon[1];
      ans++;
    }
  }
  return ans;
};
// console.log(
//   findMinArrowShots([
//     [10, 16],
//     [2, 8],
//     [1, 6],
//     [7, 12],
//   ])
// );
// console.log(
//   findMinArrowShots([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8],
//   ])
// );
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
console.log(
  findMinArrowShots([
    [7, 15],
    [6, 14],
    [8, 12],
    [3, 4],
    [4, 13],
    [6, 14],
    [9, 11],
    [6, 12],
    [4, 13],
  ])
);
// console.log(
//   findMinArrowShots([
//     [1, 2],
//     [4, 5],
//     [1, 5],
//   ])
// );
