/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let preSign = "+";
  let num = 0;
  let result = 0;
  for (let index = 0; index < s.length; index++) {
    const ele = s[index];
    if (ele !== " " && !isNaN(ele)) {
      num = 10 * num + Number(ele);
    }
    if (isNaN(ele) || index === s.length - 1) {
      switch (preSign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case "/":
          stack.push(parseInt(stack.pop() / num));
          break;
      }
      num = 0;
      preSign = ele;
    }
  }

  while (stack.length) {
    result += stack.pop();
  }
  return result;
};
