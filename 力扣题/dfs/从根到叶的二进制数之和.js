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
//  * @return {number}
//  */
// var sumRootToLeaf = function (root) {
//   let result = 0;
//   if (!root) return result;
//   root.binaryVal = root.val;
//   const stack = [root];
//   while (stack.length) {
//     const node = stack.pop();
//     const { left, right, val, binaryVal } = node;
//     if (!left && !right) {
//       result += binaryVal;
//       continue;
//     }
//     if (right) {
//       right.binaryVal = (binaryVal << 1) + right.val;
//       stack.push(right);
//     }
//     if (left) {
//       left.binaryVal = (binaryVal << 1) + left.val;
//       stack.push(left);
//     }
//   }
//   return result;
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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  if (!root) return 0;
  const { left, right, val, binaryVal = 0 } = root;
  if (!left && !right) return binaryVal || val;
  if (left) left.binaryVal = ((binaryVal || val) << 1) + left.val;
  if (right) right.binaryVal = ((binaryVal || val) << 1) + right.val;
  return sumRootToLeaf(root.left) + sumRootToLeaf(root.right);
};
