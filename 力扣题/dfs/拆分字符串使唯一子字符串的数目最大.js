/**
 * @param {string} tiles
 * @return {number}
 */
const dfs = (tiles, depth, path, usedArr, result) => {
  if(path.length) result.push(path);
  if (depth >= tiles.length) return;
  const set = new Set()
  for (let index = 0; index < tiles.length; index++) {
    if (!usedArr[index]&&!set.has(tiles[index])) {
      const temp = usedArr.slice();
      temp[index] = true;
      set.add(tiles[index])
      dfs(tiles, depth + 1, path + tiles[index], temp, result);
    }
  }
};

var numTilePossibilities = function (tiles) {
  const result = [];
  dfs(tiles, 0, [], [], result);
  return result.length;
};
