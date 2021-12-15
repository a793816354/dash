/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let result = "";
  const stack = [];
  for (let index = 0; index < s.length; index++) {
    const ele = s[index];
    if (stack[stack.length - 1] === "(" && ele === ")") {
      stack.pop();
      if (stack.length) {
        result += ele;
      }
    } else {
      if (stack.length) {
        result += ele;
      }
      stack.push(ele);
    }
  }
  return result;
};

console.log(removeOuterParentheses("(()())(())"));
