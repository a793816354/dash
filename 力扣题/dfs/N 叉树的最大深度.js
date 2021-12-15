/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
//  */
// var maxDepth = function (root) {
//   let result = 0;
//   if (!root) return result;
//   root.depth = 1;
//   const stack = [root];
//   while (stack.length) {
//     const node = stack.pop();
//     const { children, depth } = node;
//     if (result < depth) {
//       result = depth;
//     }

//     for (let index = 0; index < children.length; index++) {
//       const childNode = children[index];
//       childNode.depth = depth+1;
//       stack.push(childNode);
//     }
//   }
//   return result;
// };

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

// /**
//  * @param {Node|null} root
//  * @return {number}
//  */
// var maxDepth = function(root) {
//     if(!root) return 0
//     let result = 0
//     const dfs = (root,depth)=>{
//         if(result<depth) result = depth
//         for (let index = 0; index < root.children.length; index++) {
//            dfs(root.children[index],depth+1)
//         }
//     }
//     dfs(root,1)
//     return result
// };

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let result = 1
  for (let index = 0; index < root.children.length; index++) {
    result = Math.max(result, 1 + maxDepth(root.children[index]));
  }
  return result;
};
