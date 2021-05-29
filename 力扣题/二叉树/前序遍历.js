const Stack = require("../../类/Stack.js");
// const binaryTree = require("../../类/tree.js");

// const preorderTraversal = (root) => {
//   const result = [];
//   const stack = new Stack();
//   stack.push(root);

//   while (stack.top()) {
//     const cur = stack.top();
//     result.push(cur.val);
//     stack.pop();

//     if (cur.right) {
//       stack.push(cur.right);
//     }

//     if (cur.left) {
//       stack.push(cur.left);
//     }
//   }
//   return result;
// };

const preorderTraversal = (root) => {
  const result = [];
  const stack = [];
  stack.push(root);

  while (stack[stack.length - 1]) {
    const cur = stack[stack.length - 1];
    result.push(cur.val);
    stack.pop();

    if (cur.right) {
      stack.push(cur.right);
    }

    if (cur.left) {
      stack.push(cur.left);
    }
  }
  return result;
};
