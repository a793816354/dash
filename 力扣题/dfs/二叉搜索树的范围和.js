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
//  * @param {number} low
//  * @param {number} high
//  * @return {number}
//  */
// var rangeSumBST = function(root, low, high) {
//     let result = 0
//     const stack = []
//     while(root||stack.length){
//         let flag = true
//         while(root&&flag){
//             if(root.val<low){
//                 flag = false
//             }
//             stack.push(root)
//             root = root.left
//         }
//         const node = stack.pop()
//         if(node.val>=low&&node.val<=high){
//             result+=node.val
//         }else if(node.val>high){
//             break
//         }
//         root = node.right
//     }
//     return result
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (!root) return 0;
  const {val} = root
  if (val > high) return rangeSumBST(root.left, low, high);
  if (val < low) return rangeSumBST(root.right, low, high);
  return (
    val +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  );
};
