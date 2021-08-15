/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const result = [];
  for (let index = 0; index < 1 << n; index++) {
    result.push(index);
  }
  return result;
};
