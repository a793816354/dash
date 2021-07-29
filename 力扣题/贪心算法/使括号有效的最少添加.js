/**
 * @param {string} s
 * @return {number}
 */
//字符个数
// var minAddToMakeValid = function (s) {
//   let leftNum = 0;
//   let result = 0;

//   for (let index = 0; index < s.length; index++) {
//     const ele = s[index];
//     if (ele === "(") {
//       leftNum++;
//     } else {
//       if (leftNum > 0) {
//         leftNum--;
//       } else {
//         result++;
//       }
//     }
//   }
//   result += leftNum;
//   return result;
// };

// 栈
var minAddToMakeValid = function (s) {
  if (!s.length) return 0;

  const stack = [s[0]];

  for (let index = 1; index < s.length; index++) {
    const ele = s[index];
    const lastStackItem = stack[stack.length - 1];
    if (lastStackItem === "(" && ele === ")") {
      stack.pop();
    }else{
        stack.push(ele)
    }
  }

  return stack.length;
};
console.log(minAddToMakeValid("()))(("));
