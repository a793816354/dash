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
//   let lastNode = null;
//   let firstLeftNode = null;
//   while (root || stack.length) {
//     while (root) {
//       stack.push(root);
//       root = root.left;
//     }

//     const node = stack.pop();
//     root = node.right;
//     if (!firstLeftNode) {
//       firstLeftNode = node;
//       lastNode = node;
//     } else {
//       lastNode.right = node;
//       lastNode = lastNode.right
//     }

//     node.left = null
//     node.right = null
//   }
//   return firstLeftNode;
// };

// class TreeNode {
//   constructor(val) {
//     this.left = null;
//     this.right = null;
//     this.val = val;
//   }
// }

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
//   let result = null;
//   let lastNode = null;
//   const dfs = (node) => {
//     if (!node) return;
//     dfs(node.left);
//     if (!result) {
//       result = node;
//       lastNode = node;
//     } else {
//       lastNode.right = new TreeNode(node.val);
//       lastNode = lastNode.right;
//     }
//     dfs(node.right);
//   };
//   dfs(root);
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let result = null;
  let lastNode = null;
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    if (!result) {
      result = node;
      lastNode = node;
    } else {
      lastNode.right = node
      node.left = null
      lastNode = node
    }
    dfs(node.right);
  };
  dfs(root);
  return result;
};
