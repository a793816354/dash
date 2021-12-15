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
// var minDiffInBST = function(root) {
//     let result = Infinity
//     pre = Infinity
//     const stack = []
//     while(root||stack.length){
//         while(root){
//             stack.push(root)
//             root = root.left
//         }
//         const node = stack.pop()
//         result = Math.min(result,Math.abs(node.val-pre))
//         pre = node.val
//         root = node.right
//     }
//     return result
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
//  * @return {number}
//  */
// var minDiffInBST = function (root) {
//   let result = Infinity;
//   pre = Infinity;

//   const dfs = (root) => {
//     if (!root) return;
//     dfs(root.left);
//     result = Math.min(result, Math.abs(root.val - pre));
//     pre = root.val;
//     dfs(root.right);
//   };
//   dfs(root);
//   return result
// };