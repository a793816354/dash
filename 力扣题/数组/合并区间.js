/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let index = 1; index < intervals.length; index++) {
    const item = intervals[index];
    const lastResult = result[result.length - 1];
    if (lastResult[1] >= item[0] && lastResult[1] <= item[1]) {
      lastResult[1] = item[1];
      continue;
    }

    if (item[0] > lastResult[1]) {
      result.push(item);
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
    [1, 4],
    [0, 4],
  ])
);
console.log(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [1, 10],
  ])
);
