// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var canPermutePalindrome = function (s) {
//   const set = new Set();
//   for (let index = 0; index < s.length; index++) {
//     if (set.has(s[index])) {
//       set.delete(s[index]);
//     } else {
//       set.add(s[index]);
//     }
//   }
//   return set.size < 2;
// };
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const arr = [];
  const initIndex = "a".charCodeAt(0);
  for (let index = 0; index < s.length; index++) {
    const eleIndex = s[index].charCodeAt(0) - initIndex;
    if (arr[eleIndex]) {
      arr[eleIndex]--;
    } else {
      arr[eleIndex] = 1;
    }
  }

  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) count++;
  }
  return count < 2;
};

console.log(canPermutePalindrome("code"));
