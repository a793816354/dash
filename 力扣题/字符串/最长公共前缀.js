/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  let strIndex = 0;
  let indexWord = result;

  while (strIndex < strs[0].length) {
    indexWord = strs[0][strIndex];
    for (let index = 0; index < strs.length; index++) {
      if (indexWord !== strs[index][strIndex]) {
        return result;
      }
    }
    result += indexWord;
    strIndex++;
  }

  return result;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
