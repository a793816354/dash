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
//  * @return {TreeNode}
//  */
// var increasingBST = function (root) {
//   const stack = [];
//   let newHead = null;
//   let pre = null;

//   while (root || stack.length) {
//     while (root) {
//       stack.push(root);
//       let leftNode = root.left;
//       root.left = null;
//       root = leftNode;
//     }
//     const node = stack.pop();
//     root = node.right;
//     if (!newHead) {
//       newHead = node;
//       pre = node;
//     } else {
//       pre.right = node;
//       pre = node;
//     }
//   }

//   return newHead;
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let pre = null;
  let newHead = null
  const dfs = (root) => {
    if (!root) return null;
    dfs(root.left);
    root.left = null;
    if (pre) {
      pre.right = root;
      pre = root;
    } else {
      pre = root;
      newHead = root;
    }
    dfs(root.right);
  };
  dfs(root)
  return newHead
};
