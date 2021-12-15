/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const dfs = (n, k, depth, path, start, result) => {
  if (depth === k) {
    result.push(path);
    return;
  }
  for (let index = start; index <= n; index++) {
    dfs(n, k, depth + 1, [...path, index], index + 1, result);
  }
};
var combine = function (n, k) {
  const result = [];
  dfs(n, k, 0, [], 1, result);
  return result;
};
