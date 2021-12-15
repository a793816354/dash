/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const dfs = (nodeA,nodeB)=>{
    if(!nodeA&&!nodeB) return true
    if(!nodeA||!nodeB) return false
    return nodeA.val===nodeB.val&&dfs(nodeA.left,nodeB.right)&&dfs(nodeA.right,nodeB.left)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true
    return dfs(root.left,root.right)
};