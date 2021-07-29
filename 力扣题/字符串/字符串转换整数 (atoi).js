/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
//思考：1. 第一个符号为负号则没问题
// 2.使用匹配数字类型的方式：
// 1.typeof
// 2.正则
// 3.isnan

const judgeNumber = (word) => {
  return /\d/.test(word)
};

var myAtoi = function (s) {
  let numStr = "";
  let startIndex = 0;
  let sign = 1;

  for (let index = 0; index < s.length; index++) {
    const word = s[index];

    if (word !== " ") {
      startIndex = index;
      break;
    }
  }

  for (let index = startIndex; index < s.length; index++) {
    const word = s[index];

    if (index === startIndex && word === "-") {
      sign = -1;
    } else if (index === startIndex && word === "+") {
      sign = 1;
    } else if (judgeNumber(word)) {
        
      numStr += word;
    } else {
      break;
    }
  }

  const result = sign * Number(numStr);

  if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }

  if (result < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  }

  return result;
};
console.log(myAtoi("   +0 123"));
// @lc code=end
