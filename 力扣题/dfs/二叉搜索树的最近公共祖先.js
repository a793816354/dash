/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null
    if(root===p&&root===q) return root
    const left = root.left===p?p:root.left===q?q:root.left
    const right = root.right===p?p:root.right===q?q:root.right
    const l = lowestCommonAncestor(left,p,q)
    const r = lowestCommonAncestor(right,p,q)

};