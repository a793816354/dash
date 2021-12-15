// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */
// var mirrorTree = function(root) {
//     if(!root) return root
//     mirrorTree(root.left)
//     mirrorTree(root.right)
//     const temp = root.left
//     root.left = root.right
//     root.right = temp
//     return root
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) return root;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    const { left, right, val } = node;

    if (right) {
      stack.push(right);
    }
    if (left) {
      stack.push(left);
    }
    const temp = node.left
    node.left= node.right
    node.right = temp
  }
  return root;
};
