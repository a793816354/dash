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
// var findSecondMinimumValue = function (root) {
//     if(!root) return -1
//     const stack = [root]
//     const arr = []
//     while(stack.length){
//         const node = stack.pop()
//         arr.push(node.val)
//         if(node.right){
//             stack.push(node.right)
//         }
//         if(node.left){
//             stack.push(node.left)
//         }
//     }
//     const setArr = [...new Set(arr)]
//     setArr.sort((a,b)=>a-b)
//     return setArr[1]||-1
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
// var findSecondMinimumValue = function (root) {
//     if(!root||(!root.left&&!root.right)) return -1
//      let result = Infinity
//     const stack = [root]
//     const init = root.val
//     while(stack.length){
//         const node = stack.pop()
//         if(node.val>init){
//             result = Math.min(result,node.val)
//         }
//         if(node.right){
//             stack.push(node.right)
//         }
//         if(node.left){
//             stack.push(node.left)
//         }
//     }
//     return result===Infinity?-1:result
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
var findSecondMinimumValue = function (node, root = node) {
  if (!node) return -1;
  if (root.val < node.val) return node.val;
  const leftVal = findSecondMinimumValue(node.left, root);
  const rightVal = findSecondMinimumValue(node.right, root);

  if(leftVal===-1) return rightVal
  if(rightVal===-1) return leftVal
  return Math.min(leftVal,rightVal)
};
