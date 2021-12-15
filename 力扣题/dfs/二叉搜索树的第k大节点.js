// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} k
//  * @return {number}
//  */
// var kthLargest = function (root, k) {
//   const arr = [];
//   const stack = [];
//   while (root || stack.length) {
//     while (root) {
//       stack.push(root);
//       root = root.left;
//     }
//     const node = stack.pop();
//     arr.push(node.val);
//     root = node.right;
//   }
//   return arr[arr.length - k];
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} k
//  * @return {number}
//  */
// var kthLargest = function (root, k) {
//   const arr = [];
//   const dfs = (root) => {
//     if (!root) return;
//     dfs(root.left);
//     arr.push(root.val);
//     dfs(root.right);
//   };
//   dfs(root);
//   return arr[arr.length - k];
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
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let result = null;
  const dfs = (root) => {
    if (!root) return;
    dfs(root.right);
    if (k > 1) {
      k--;
    } else {
      if (result === null) {
        result = root.val;
      }
      return;
    }
    dfs(root.left);
  };
  dfs(root);
  return result;
};
