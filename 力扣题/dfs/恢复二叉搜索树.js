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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const stack = [];
  let headNode = root;
  let preVal = -Infinity;
  let preNode = null;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop();
    if (preVal >= node.val) {
      const leftNode = stack[stack.length - 1] || { val: Infinity };
      const rightNode = node.right || { val: Infinity };
      const lowerNode = rightNode.val > leftNode.val ? leftNode : rightNode;
      const temp = lowerNode.val;
      lowerNode.val = preNode.val;
      preNode.val = temp;
      return headNode;
    }
    preVal = node.val;
    preNode = node;
    root = node.right;
  }
};
