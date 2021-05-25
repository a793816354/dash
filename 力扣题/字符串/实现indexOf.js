/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  const cache = [];

  const nextArr = [0];
  for (let i = 1; i < needle.length; i++) {
    const lastIndex = nextArr[nextArr.length - 1];
    if (needle[i] === needle[lastIndex]) {
      nextArr[nextArr.length] = lastIndex + 1;
    } else if (needle[i] === needle[0]) {
      nextArr[nextArr.length] = lastIndex;
    } else {
      nextArr[nextArr.length] = 0;
    }
  }

  // console.log(nextArr);

  let i = 0;
  let j = 0;
  while (j < needle.length && i < haystack.length) {
    if (haystack[i] !== needle[j] && j) {
      j = nextArr[j - 1] || 0;
      continue;
    }

    if (haystack[i] === needle[j]) {
      j++;
    }
    i++;

    if (j === needle.length) {
      return i - j;
    }
  }

  return -1;
};
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("", ""));
console.log(strStr("mississippi", "issip"));
console.log(strStr("cacdababab", "ababab"));
console.log(strStr("aabaaabaaac", "aabaaac"));
console.log(strStr("ababcaababcaabc", "ababcaabc"));
// abcabcab;
