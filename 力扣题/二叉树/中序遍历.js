const Stack = require("../../类/Stack.js");
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function (root) {
//   const result = [];
//   const stack = new Stack();
//   stack.push(root);

//   while (stack.top()) {
//     let cur = stack.top();

//     if (cur.left && !cur.left.flag) {
//       cur.left.flag = true;
//       stack.push(cur.left);
//     } else {
//       while (cur) {
//         result.push(cur.val);
//         stack.pop();
//         if (cur.right && !cur.right.flag) {
//           cur.right.flag = true;
//           stack.push(cur.right);
//           break;
//         }

//         cur = stack.top();
//       }
//     }
//   }

//   return result;
// };

// var inorderTraversal2 = function (root) {
//   const result = [];
//   const stack = new Stack();
//   stack.push(root);

//   while (stack.top()) {
//     let cur = stack.top();

//     while (cur.left) {
//       cur = cur.left;
//       stack.push(cur);
//     }

//     while (cur) {
//       result.push(cur.val);
//       stack.pop();

//       if (cur.right) {
//         stack.push(cur.right);
//         break;
//       }

//       cur = stack.top();
//     }
//   }

//   return result;
// };
