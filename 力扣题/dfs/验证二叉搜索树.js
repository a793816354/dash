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
//  * @return {boolean}
//  */
// var isValidBST = function(root) {
//     if(!root) return true
//     const stack = []
//     let preVal = -Infinity
//     while(root||stack.length){
//         while(root){
//             stack.push(root)
//             root = root.left
//         }
//         const node = stack.pop()
//         if(node.val<=preVal) return false
//         preVal = node.val
//         root = node.right
//     }
//     return true
// };



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const dfs = (root,lower,upper)=>{
    if(!root) return true
    if(root.val<=lower||root.val>=upper) return false
    return dfs(root.left,lower,root.val)&&dfs(root.right,root.val,upper)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return dfs(root,-Infinity,Infinity)
};