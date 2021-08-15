// const getReverseStr = (str) => {
//   let reverseStr = "";
//   for (let index = str.length - 1; index >= 0; index--) {
//     reverseStr += str[index];
//   }
//   return reverseStr;
// };

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
// //反转
// var addBinary = function (a, b) {
//   const reverseA = getReverseStr(a);
//   const reverseB = getReverseStr(b);
//   let maxLength = Math.max(a.length, b.length);
//   let result = "";
//   let flag = 0;

//   for (let index = 0; index < maxLength; index++) {
//     const sum =
//       flag + Number(reverseA[index] || 0) + Number(reverseB[index] || 0);
//     result += sum % 2;
//     flag = Number(sum > 1);
//   }
//   result = getReverseStr(result);
//   if (flag) result = 1 + result;

//   return result;
// };

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
//双指针
var addBinary = function (a, b) {
  let aNode = a.length - 1;
  let bNode = b.length - 1;

  let result = "";
  let flag = 0;
  while (aNode >= 0 || bNode >= 0) {
    const sum = Number(a[aNode] || 0) + Number(b[bNode] || 0) + flag;
    flag = sum > 1;
    result = (sum % 2) + result;
    aNode--;
    bNode--;
  }
  if (flag) result = 1 + result;
  return result;
};
console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
// console.log(addBinary("0", "0"));
