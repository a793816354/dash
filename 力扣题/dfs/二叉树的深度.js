/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let result = 0
  if (!root) return result;
  root.depth = 1;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    const { left, right, depth } = node;
    result = Math.max(result,depth)

    if (right) {
      right.depth = depth + 1;
      stack.push(right);
    }
    if (left) {
      left.depth = depth + 1;
      stack.push(left);
    }
  }
  return result;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
