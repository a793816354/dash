const Stack = require("../../类/Stack.js");

// const lrd = (root) => {
//   if (!root) return [];

//   const result = [];
//   const stack = [];
//   stack.push(root);

//   while (stack.length) {
//     const cur = stack[stack.length - 1];
//     // cur.flag = true;

//     if (!cur.flag && cur.right) {
//       stack.push(cur.right);
//     }
//     if (!cur.flag && cur.left) {
//       stack.push(cur.left);
//     }

//     if (cur.flag || (!cur.right && !cur.left)) {
//       result.push(cur.val);
//       stack.pop();
//     }
//     cur.flag = true;
//   }
//   return result;
// };

const lrd2 = (root) => {
  if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length) {
    const cur = stack[stack.length - 1];

    if (cur.flag) {
      result.push(cur.val);
      stack.pop();
    } else {
      if (cur.right) {
        stack.push(cur.right);
      }
      if (cur.left) {
        stack.push(cur.left);
      }

      if (!cur.right && !cur.left) {
        result.push(cur.val);
        stack.pop();
      }
    }

    cur.flag = true;
  }
  return result;
};

// 发现规律，即后序遍历是从右边开始的前序遍历
const lrd3 = (root) => {
  if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length) {
    let cur = stack[stack.length - 1];
    result.push(cur.val);
    stack.pop();

    if (cur.left) {
      stack.push(cur.left);
    }

    if (cur.right) {
      stack.push(cur.right);
    }
  }

  return result.reverse();
};
