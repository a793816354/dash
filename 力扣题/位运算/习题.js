/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  const flag = num >= 0;
  let formatNum = flag ? num : -num;
  let str = "";
  while (formatNum >= 7) {
    str += formatNum % 7;
    formatNum = Math.floor(formatNum / 7);
  }

  let result = "";
  for (let index = str.length - 1; index >= 0; index--) {
    result += str[index];
  }
  result = (flag ? "" : "-") + formatNum + result;
  return result;
};

console.log(convertToBase7(100));
console.log(convertToBase7(-7));
