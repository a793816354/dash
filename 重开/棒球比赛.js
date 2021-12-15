/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = [];
  let result = 0;
  for (let index = 0; index < ops.length; index++) {
    const ele = ops[index];
    switch (ele) {
      case "C":
        stack.pop();
        break;
      case "D":
        stack.push(stack[stack.length - 1] * 2);
        break;
      case "+":
        const top = stack.pop();
        const secondTop = stack[stack.length - 1];
        stack.push(top);
        stack.push(Number(top) + Number(secondTop));
        break;
      default:
        stack.push(ele);
    }
  }
  while (stack.length) {
    const node = stack.pop();
    result += Number(node);
  }
  return result;
};
