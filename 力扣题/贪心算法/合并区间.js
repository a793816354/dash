/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals.length) return [];

  intervals.sort((a, b) => b[1] - a[1]);
  const result = [intervals[0]];
  for (let index = 0; index < intervals.length; index++) {
    const ele = intervals[index];
    const lastRange = result[result.length - 1];
    if (ele[1] < lastRange[0]) {
      result.push(ele);
    } else if (ele[0] < lastRange[0]) {
      lastRange[0] = ele[0];
    }
  }
  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ])
);
