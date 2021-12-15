/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const handle = (str) => {
  const stack = [];
  for (let index = 0; index < str.length; index++) {
    if (str[index] === "#") {
      stack.pop();
    } else {
      stack.push(str[index]);
    }
  }
  let result = "";
  while (stack.length) {
    result += stack.pop();
  }

  return result;
};

var backspaceCompare = function (s, t) {
  return handle(s) === handle(t);
};
