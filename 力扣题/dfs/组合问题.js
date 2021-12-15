/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const dfs = (candidates, target, path, start, result) => {
  if (target === 0) {
    result.push(path);
    return;
  }
  for (let index = start; index < candidates.length; index++) {
    const ele = candidates[index];
    if (ele > target) break;
    if (candidates[index] === candidates[index - 1]) continue;
    dfs(candidates, target - ele, [...path, ele], index, result);
  }
};
var combinationSum = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  dfs(candidates, target, [], 0, result);
  return result;
};
