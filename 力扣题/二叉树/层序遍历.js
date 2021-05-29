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
 * @return {number[][]}
 */

var levelOrder = function (root) {
  if (!root) return [];

  const result = [];
  root.level = 1;
  const queue = [root];

  while (queue.length) {
    const cur = queue[0];
    result[0] || (result[0] = []);
    const lastArr = result[result.length - 1];
    lastArr[lastArr.length] = cur.val;

    const level = cur.level;
    queue.shift();

    if (!queue[0] || (queue[0] && queue[0].level !== level)) {
      result.push([]);
    }

    if (cur.left) {
      cur.left.level = level + 1;
      queue.push(cur.left);
    }

    if (cur.right) {
      cur.right.level = level + 1;
      queue.push(cur.right);
    }
  }
  return result.slice(0, result.length - 1);
};

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
 * @return {number[][]}
 */

var levelOrder2 = function (root) {
  if (!root) return [];

  const result = [];
  root.level = 1;
  const queue = [root];

  while (queue.length) {
    const len = queue.length;

    const arr = [];
    for (let index = 0; index < len; index++) {
      const firstNode = queue[0];
      arr[arr.length] = firstNode.val;
      queue.shift();

      if (firstNode.left) {
        queue.push(firstNode.left);
      }

      if (firstNode.right) {
        queue.push(firstNode.right);
      }
    }
    result[result.length] = arr;
  }
  return result;
};
