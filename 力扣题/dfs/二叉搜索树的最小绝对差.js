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
// var getMinimumDifference = function (root) {
//   let result = 0;
//   if (!root) return result;
//   const stack = [];
//   let preVal = null;
//   let minGap = Infinity;
//   while (root || stack.length) {
//     while (root) {
//       stack.push(root);
//       root = root.left;
//     }
//     const node = stack.pop();
//     if (preVal !== null && minGap > Math.abs(node.val - preVal)) {
//       minGap = Math.abs(node.val - preVal);
//     }
//     preVal = node.val;
//     root = node.right;
//   }
//   return minGap;
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
var getMinimumDifference = function (root) {
  let min = Infinity  
  let pre = null

  const dfs = (root)=>{
    if(!root) return Infinity
    dfs(root.left)
    if(pre!==null){
        min = Math.min(min,Math.abs(root.val-pre))
    }
    pre = root.val
    dfs(root.right)
  }
  dfs(root)
  return min
};
