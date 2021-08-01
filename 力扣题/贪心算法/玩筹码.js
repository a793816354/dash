/**
 * @param {number[]} position
 * @return {number}
 */
// var minCostToMoveChips = function (position) {
//   const length = position.length;
//   return Math.floor(length / 2);
//   //  let odd = position.filter(item => item & 1).length
//   //     let even = position.length - odd

//   //     return odd > even ? even : odd
// };
var minCostToMoveChips = function (position) {
  let odd = position.filter((item) => item & 1).length;
  let even = position.length - odd;

  return odd > even ? even : odd;
};
console.log(minCostToMoveChips([1, 2, 2, 2, 2]));
