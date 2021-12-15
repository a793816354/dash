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
//  * @param {number} target
//  * @return {number}
//  */
// var closestValue = function(root, target) {
//     if(!root) return false
//     if(root.val===target) return root
//     let minGap = Infinity
//     let closestNode = root
//     const stack = []
//     while(root||stack.length){
//         while(root){
//             stack.push(root)
//             root = root.left
//         }
//         const node = stack.pop()
//         if(minGap>Math.abs(node.val-target)){
//             minGap = Math.abs(node.val-target)
//             closestNode = node
//         }
//         root = node.right
//     }
//     return closestNode.val
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
//  * @param {number} target
//  * @return {number}
//  */

// var closestValue = function (root, target) {
//   let minGap = Infinity;
//   let closestNodeVal = root.val
//   var dfs = function (root) {
//     if (!root) return Infinity;
//     dfs(root.left);
//     if (minGap > Math.abs(root.val - target)) {
//       minGap = Math.abs(root.val - target);
//       closestNodeVal= root.val
//     }
//     dfs(root.right);
//   };
//   dfs(root);
//   return closestNodeVal;
// };


// var closestValue = function(root, target) {
//     if(!root) return false
//     if(root.val===target) return root
//     let preVal = -Infinity
//     const stack = []
//     while(root||stack.length){
//         while(root){
//             stack.push(root)
//             root = root.left
//         }
//         const node = stack.pop()
//         if(target>=preVal&&target<=node.val){
//             return Math.abs(target-preVal)>Math.abs(target-node.val)?node.val:preVal
//         }
//         root = node.right
//         preVal = node.val
//     }
//     return preVal
// };

var closestValue = function(root, target) {
    let minGap = Infinity
    let minVal=root.val
    while(root){
        if(minGap>Math.abs(root.val-target)){
            minGap=Math.abs(root.val-target)
            minVal = root.val
        }
        root = root.val<target?root.right:root.left
    }
    return minVal
};