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
//  * @return {number[]}
//  */
// //有负数，吃力不讨好
// var findMode = function (root) {
//   const arr = [];
//   let result = [];
//   if (!root) return result;
//   const stack = [root];
//   while (stack.length) {
//     const node = stack.pop();
//     arr[node.val + 100000] = (arr[node.val + 100000] || 0) + 1;
//     if (node.right) {
//       stack.push(node.right);
//     }
//     if (node.left) {
//       stack.push(node.left);
//     }
//   }
//   let max = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] !== undefined && max < arr[index]) {
//       max = arr[index];
//     }
//   }
//   for (let index = 0; index < arr.length; index++) {
//     if (max === arr[index]) {
//       result.push(index - 100000);
//     }
//   }
//   return result;
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
//  * @return {number[]}
//  */
// var findMode = function (root) {
//     let max = 0;
//   const obj = {}
//   let result = [];
//   if (!root) return result;
//   const stack = [root];
//   while (stack.length) {
//     const node = stack.pop();
//     obj[node.val] = (obj[node.val] || 0) + 1;
//     if(max<obj[node.val]){
//         max=obj[node.val]
//     }
//     if (node.right) {
//       stack.push(node.right);
//     }
//     if (node.left) {
//       stack.push(node.left);
//     }
//   }

//   for (const key in obj) {
//       if(obj[key]===max){
//           result.push(key)
//       }
//   }
//   return result;
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
 * @return {number[]}
 */
var findMode = function (root) {
  const result = [];
  if (!root) return result;
  const stack = [];
  const obj = {};
  let max = 1;
  let count = 1;
  lastVal = null;

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop();
    obj[node.val] = (obj[node.val] || 0) + 1;
    if (node.val === lastVal) {
      count++;

      if (max < count) {
        max = count;
      }
    } else {
      count = 1;
      lastVal = node.val;
    }

    root = node.right;
  }
  for (const key in obj) {
    if (obj[key] === max) {
      result.push(key);
    }
  }
  return result;
};
