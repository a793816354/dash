/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const set = new Set();
  let result = 0;
  for (let index = 0; index < jewels.length; index++) {
    set.add(jewels[index]);
  }

  for (let index = 0; index < stones.length; index++) {
    if (set.has(stones[index])) {
      result++;
    }
  }
  return result;
};
