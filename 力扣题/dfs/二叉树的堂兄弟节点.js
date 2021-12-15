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
//  * @param {number} x
//  * @param {number} y
//  * @return {boolean}
//  */
// var isCousins = function (root, x, y) {
//   if (!root) return true;
//   let leftNode = {};
//   let rightNode = {};
//   root.depth = 1;
//   const stack = [root];
//   while (stack.length) {
//     const node = stack.pop();
//     const { left, right, val, depth, preNode } = node;
//     if (val === x && preNode !== rightNode.preNode) {
//       leftNode = node;
//     } else if (val === y && preNode !== leftNode.preNode) {
//       rightNode = node;
//     }

//     if (right) {
//       right.depth = depth + 1;
//       right.preNode = node;
//       stack.push(right);
//     }
//     if (left) {
//       left.depth = depth + 1;
//       left.preNode = node;
//       stack.push(left);
//     }
//   }
//   return leftNode.depth === rightNode.depth;
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  if (!root) return true;
  root.depth = 1;
  let leftNode = {depth:-1};
  let rightNode = {};
  const dfs = (root) => {
    if (!root) return true;
    const { left, right, val, depth, preNode } = root;
    if (val === x && preNode !== rightNode.preNode) {
      leftNode = root;
    } else if (val === y && preNode !== leftNode.preNode) {
      rightNode = root;
    }

    if (left) {
      left.depth = depth + 1;
      left.preNode = root;
      dfs(left);
    }
    if (right) {
      right.depth = depth + 1;
      right.preNode = root;
      dfs(right);
    }
  };
  dfs(root);
  return rightNode.depth===leftNode.depth
};