// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isUnivalTree = function (root) {
//   if (!root) return true;
//   let nodeVal = root.val
//   const stack = [root];
//   while (stack.length) {
//     const node = stack.pop();
//     if (nodeVal !== node.val) {
//       return false;
//     }
//     if (node.right) {
//       stack.push(node.right);
//     }
//     if (node.left) {
//       stack.push(node.left);
//     }
//   }
//   return true;
// };

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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) return true;
  let leftVal = root.left ? root.left.val : root.val;
  let rightVal = root.right ? root.right.val : root.val;
  return (
    root.val === leftVal &&
    root.val === rightVal &&
    isUnivalTree(root.left) &&
    isUnivalTree(root.right)
  );
};
