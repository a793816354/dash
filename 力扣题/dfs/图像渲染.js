/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const initVal = image[sr][sc];
  if (initVal === newColor) return image;
  const stack = [[sr, sc]];
  while (stack.length) {
    const node = stack.pop();
    const [row, col] = node;
    image[row][col] = newColor;
    if (image[row - 1] !== undefined && image[row - 1][col] === initVal) {
      stack.push([row - 1, col]);
    }
    if (image[row + 1] !== undefined && image[row + 1][col] === initVal) {
      stack.push([row + 1, col]);
    }
    if (image[row][col + 1] === initVal) {
      stack.push([row, col + 1]);
    }
    if (image[row][col - 1] === initVal) {
      stack.push([row, col - 1]);
    }
  }
  return image;
};
