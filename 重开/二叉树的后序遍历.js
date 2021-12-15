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
var postorderTraversal = function (root) {
  let pre = null;
  const stack = [];
  const result = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop();
    if (node.right && node.right !== pre) {
      stack.push(node);
      root = node.right;
    } else {
      result.push(node.val);
      pre = node;
    }
  }
  return result;
};
