/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let result = 0;
  let one = 0;
  let two = 0;

  while (one < g.length && two < s.length) {
    const child = g[one];
    const biscuit = s[two];

    if (child <= biscuit) {
      one++;
      two++;
      result++;
    } else if (child > biscuit) {
      two++;
    }
  }
  return result;
};
