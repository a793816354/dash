// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var maxAreaOfIsland = function (grid) {
//   let max = 0;
//   const stack = [];

//   for (let i = 0; i < grid.length; i++) {
//     const row = grid[i];

//     for (let j = 0; j < row.length; j++) {
//       const ele = row[j];

//       if (ele === 1) {
//         let area = 0;

//         stack.push([i, j]);
//         while (stack.length) {
//           area++;
//           const top = stack.pop();
//           const [r, c] = top;
//           grid[r][c] = 0;

//           //   左
//           if (grid[r][c - 1]) {
//             grid[r][c - 1] = 0;
//             stack.push([r, c - 1]);
//           }
//           //   右
//           if (grid[r][c + 1]) {
//             grid[r][c + 1] = 0;
//             stack.push([r, c + 1]);
//           }
//           //   下
//           if (grid[r + 1] && grid[r + 1][c]) {
//             grid[r + 1][c] = 0;
//             stack.push([r + 1, c]);
//           }

//           //上
//           if (grid[r - 1] && grid[r - 1][c]) {
//             grid[r - 1][c] = 0;
//             stack.push([r - 1, c]);
//           }
//         }
//         if (max < area) {
//           max = area;
//         }
//       }
//     }
//   }
//   return max;
// };
// console.log(
//   maxAreaOfIsland([
//     [0, 1],
//     [1, 1],
//   ])
// );
// console.log(
//   maxAreaOfIsland([
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0],
//     [0, 0, 0, 1, 1],
//     [0, 0, 0, 1, 1],
//   ])
// );
// console.log(
//   maxAreaOfIsland([
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//   ])
// );
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {

};