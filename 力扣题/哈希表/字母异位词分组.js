/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const obj = {};
  for (let index = 0; index < strs.length; index++) {
    const str = strs[index];

    const newStr = str
      .split("")
      .sort((a, b) => {
        return a.codePointAt(0) - b.codePointAt(0);
      })
      .join("");

    if (obj[newStr]) {
      obj[newStr].push(str);
    } else {
      obj[newStr] = [str];
    }
  }
  return Object.values(obj)
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
