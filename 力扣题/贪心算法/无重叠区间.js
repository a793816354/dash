/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (!points.length) return 0;

  points.sort((a, b) => a[1] - b[1]);
  const init = points[0][1];
  let result = 1;

  for (let index = 1; index < points.length; index++) {
    let ele = points[index];
    if (ele[0] > init) {
      init = ele[1];
      result++;
    }
  }
  return result;
};
