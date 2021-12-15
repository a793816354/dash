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
//  * @return {number[]}
//  */
// var getLonelyNodes = function (root) {
//   let result = [];
//   if (!root) return result;
//   const stack = [root];
//   while (stack.length) {
//     const node = stack.pop();
//     const { left, right, val } = node;

//     if (right) {
//       stack.push(right);
//     }
//     if (left) {
//       stack.push(left);
//     }

//     if (!left && right) result.push(right.val);
//     if (!right && left) result.push(left.val);
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
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
  let result = [];
  if (!root) return result;
  const dfs = (root) => {
    if (!root) return;
    const { left, right, val } = root;
    if (!left && right) result.push(right.val);
    if (!right && left) result.push(left.val);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return result;
};
