// /**
//  * // Definition for a Node.
//  * function Node(val,children) {
//  *    this.val = val;
//  *    this.children = children;
//  * };
//  */

// /**
//  * @param {Node|null} root
//  * @return {number[]}
//  */
// //迭代
// var postorder = function (root) {
//   const result = [];
//   if (!root) return result;
//   const stack = [root];
//   let pre = null;

//   while (stack.length) {
//     const node = stack.pop();
//     const children = node.children;
//     if (children.length && children[children.length - 1] !== pre) {
//       stack.push(node);
//       for (let index = children.length - 1; index >= 0; index--) {
//         stack.push(children[index]);
//       }
//     } else {
//       result.push(node.val);
//     }
//     pre = node;
//   }
//   return result;
// };

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root, result = []) {
  if (!root) return [];
  for (let index = 0; index < root.children.length; index++) {
    postorder(root.children[index], result);
  }
  result.push(root.val);
  return result;
};
