/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let lastStart = 0;
  let result = "";
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === " " || i === s.length) {
      for (let j = i - 1; j >= lastStart; j--) {
        result += s[j];
      }
      result += i === s.length ? "" : " ";
      lastStart = i + 1;
    }
  }

  return result;
};
console.log(reverseWords("Let's take LeetCode contest"));
