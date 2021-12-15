// /**
//  * // Definition for a Node.
//  * function Node(val, children) {
//  *    this.val = val;
//  *    this.children = children;
//  * };
//  */

// /**
//  * @param {Node|null} root
//  * @return {number[]}
//  */
// var preorder = function (root) {
//   if (!root) return [];
//   const stack = [root];
//   const result = [];
//   while (stack.length) {
//     const node = stack.pop();
//     result.push(node.val);
//     for (let index = node.children.length - 1; index >= 0; index--) {
//       stack.push(node.children[index]);
//     }
//   }
//   return result;
// };

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root, result = []) {
  if (!root) return [];
  result.push(root.val);
  for (let index = 0; index < root.children.length; index++) {
    preorder(root.children[index], result);
  }
  return result;
};
