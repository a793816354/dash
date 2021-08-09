// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {boolean}
//  */
// var canConstruct = function (s, k) {
//   if (s.length < k) return false;

//   const obj = {};
//   for (let index = 0; index < s.length; index++) {
//     const ele = s[index];
//     if (obj[ele]) {
//       obj[ele]++;
//     } else {
//       obj[ele] = 1;
//     }
//   }

//   let singleNum = 0;
//   for (const key in obj) {
//     if (obj[key] % 2 === 1) {
//       singleNum++;
//     }
//     if (singleNum > k) return false;
//   }

//   return true;
// };

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (s.length < k) return false;

  const obj = {};
  for (let index = 0; index < s.length; index++) {
    const ele = s[index];
    if (obj[ele]) {
      obj[ele]++;
    } else {
      obj[ele] = 1;
    }
  }

  let singleNum = 0;
  for (const key in obj) {
    if (obj[key] % 2 === 1) {
      singleNum++;
    }
    if (singleNum > k) return false;
  }

  return true;
};

console.log(canConstruct("annabelle", 2));
console.log(canConstruct("cr", 7));
console.log(canConstruct("messi", 3));
console.log(canConstruct("leetcode", 3));
