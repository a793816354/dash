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
// var inorderTraversal = function (root) {
//   const stack = [];
//   const result = [];
//   while (root || stack.length) {
//     while (root) {
//       stack.push(root);
//       root = root.left;
//     }
//     const node = stack.pop();
//     result.push(node.val);
//     root = node.right;
//   }
//   return result;
// };

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
// var inorderTraversal = function (root) {
//   const result = [];
//   while (root) {
//     if (root.left) {
//       if (root.left.right) {
//         let rightNode = root.left;
//         while (rightNode && rightNode.right) {
//           rightNode = rightNode.right;
//         }
//         const leftNode = root.left;
//         root.left = null;
//         rightNode.right = root;
//         root = leftNode;
//       } else {
//         const leftNode = root.left;
//         root.left = null;
//         leftNode.right = root;
//         root = leftNode;
//       }
//     } else {
//       result.push(root.val);
//       root = root.right;
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  while (root) {
    if (root.left) {
      const leftNode = root.left;
      if (root.left.right) {
        let rightNode = root.left;
        while (rightNode && rightNode.right) {
          rightNode = rightNode.right;
        }
        rightNode.right = root;
      } else {
        leftNode.right = root;
      }
      root.left = null;
      root = leftNode;
    } else {
      result.push(root.val);
      root = root.right;
    }
  }
  return result;
};
