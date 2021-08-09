/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//1.双指针
var isSubsequence = function (s, t) {
  if (!s) return true;

  let sPointer = 0;
  let tPointer = 0;

  while (sPointer < s.length && tPointer < t.length) {
    const sChar = s[sPointer];
    const tChar = t[tPointer];
    if (sChar === tChar) {
      sPointer++;
      tPointer++;
      if (sPointer === s.length) {
        return true;
      }
    } else {
      tPointer++;
    }
  }
  return false;
};

// 2.使用对象储存index数组，在数组中找（尽量靠前）
var isSubsequence = function (s, t) {
  const map = {};
  let curIndex = -1;

  for (let index = 0; index < t.length; index++) {
    const ele = t[index];
    if (map[ele]) {
      map[ele].add(index);
    } else {
      map[ele] = new Set([index]);
    }
  }

  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if (!map[ele] || (map[ele] && !map[ele].size)) return false;

    min = [...map[ele]].find((item) => item > curIndex);
    if (min === undefined) return false;
    curIndex = min;
    map[ele].delete(min);
  }
  return true;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("acb", "ahbgdc"));
console.log(isSubsequence("ab", "baab"));
