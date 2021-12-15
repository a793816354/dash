/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = [];
  for (let index = 0; index < m; index++) {
    dp[index] = [];
  }

  dp[0][0] = grid[0][0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!i && !j) continue;
      const top = dp[i - 1] ? dp[i - 1][j] : Infinity;
      const left = dp[i][j - 1] === undefined ? Infinity : dp[i][j - 1];
      const cur = grid[i][j];
      dp[i][j] = Math.min(top, left) + cur;
    }
  }

  return dp[m - 1][n - 1];
};
