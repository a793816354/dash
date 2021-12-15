/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function (N, M, i, j) {
  let temp = 0;
  for (let index = j + 1; index < 32; index++) {
    temp += 1 << index;
  }
  for (let index = i - 1; index >= 0; index--) {
    temp += 1 << index;
  }
  return (M << i) + (N & temp);
};
console.log(insertBits(1143207437, 1017033, 11, 31));
