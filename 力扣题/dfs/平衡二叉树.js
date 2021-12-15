/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var maxDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  return (
    Math.abs(maxDepth(root.left) - maxDepth(root.right)) < 2 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
