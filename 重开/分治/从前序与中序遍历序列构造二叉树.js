// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {number[]} preorder
//  * @param {number[]} inorder
//  * @return {TreeNode}
//  */
// const getTree = (preorder, start, end, map) => {
//   if (start > end) return null;
//   const headVal = preorder[start];

//   let rightStart = start + 1;
//   for (; rightStart <= end; rightStart++) {
//     if (map[preorder[rightStart]] > map[headVal]) break;
//   }

//   return new TreeNode(
//     headVal,
//     getTree(preorder, start + 1, rightStart - 1, map),
//     getTree(preorder, rightStart, end, map)
//   );
// };

// var buildTree = function (preorder, inorder) {
//   const map = {};
//   for (let index = 0; index < inorder.length; index++) {
//     map[inorder[index]] = index;
//   }

//   return getTree(preorder, 0, preorder.length - 1, map);
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const getTree = (arr, start, end, map) => {
  if (start > end) return null;
  const headVal = arr[start];
};

//上述rightStart为for循环找的第一个，但是可以改为前序数组和中序数组之间的关系来直接获取数字
var buildTree = function (preorder, inorder) {
  const map = {};
  for (let index = 0; index < inorder.length; index++) {
    map[inorder[index]] = index;
  }
  return getTree(preorder, 0, preorder.length - 1, map);
};
