// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root1
//  * @param {TreeNode} root2
//  * @return {boolean}
//  */

// const dfs = (root) => {
//     if (!root) return []
//     if (!root.left && !root.right) return [root.val]
//     return dfs(root.left).concat(dfs(root.right))
// }

// var leafSimilar = function (root1, root2) {
//     if (!root1 && !root2) return true
//     const arr1 = dfs(root1)
//     const arr2 = dfs(root2)
//     if(arr1.length!==arr2.length) return false
//     for (let index = 0; index < arr1.length; index++) {
//         if(arr1[index]!==arr2[index]) return false
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
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

const dfs = (root) => {
    if (!root) return []
    if (!root.left && !root.right) return [root.val]
    return dfs(root.left).concat(dfs(root.right))
}

var leafSimilar = function (root1, root2) {
    if (!root1 && !root2) return true
    const arr1 = dfs(root1)
    const arr2 = dfs(root2)
    if(arr1.length!==arr2.length) return false
    for (let index = 0; index < arr1.length; index++) {
        if(arr1[index]!==arr2[index]) return false
    }
    return true
};