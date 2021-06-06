var DoublyListNode = function (val) {
  this.val = val;
  this.prev = null;
  this.next = null;
};

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  //   const newList = new DoublyListNode(-1);
  //   newList.next = head;
  let node = head;

  const stack = [];

  while (node) {
    if (node.child) {
      if (node.next) {
        stack.push(node.next);
      }

      node.next = node.child;
      node.child = null;
      node.next.prev = node;
      node = node.next;
      //   node = node.next;
    } else if (node.next) {
      node = node.next;
    } else {
      const stackNode = stack[stack.length - 1] || null;
      stack.pop();
      if (!stackNode) {
        break;
      }

      node.next = stackNode;
      stackNode.prev = node;
      node = stackNode;
    }
  }

  return head;
};
