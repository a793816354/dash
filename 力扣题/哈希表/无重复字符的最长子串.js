/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let length = 0;
  let realIndex = 0;

  for (let index = 0; index < s.length; index++) {
    const ele = s[index];
    if (set.has(ele)) {
      if (length < set.size) {
        length = set.size;
      }
      index = realIndex++;
      set.clear();
    } else {
      set.add(ele);
    }
  }

  if (length < set.size) {
    length = set.size;
  }

  return length;
};

var lengthOfLongestSubstring2 = function (s) {
  const obj = {};
  let result = 0;
  let count = 0;

  for (let index = 0; index < s.length; index++) {
    const ele = s[index];
    if (obj[ele] !== undefined) {
      const gap = index - obj[ele];
      console.log(index);
      console.log(obj[ele]);
      if (result < gap) {
        result = gap;
      }
      count = 1;
    } else {
      count++;
      if (result < count) {
        result = count;
      }
    }
    obj[ele] = index;
  }

  return result;
};
// console.log(lengthOfLongestSubstring2("cdd"));
console.log(lengthOfLongestSubstring2("abba"));
