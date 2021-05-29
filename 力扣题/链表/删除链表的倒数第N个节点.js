const { LinkedListNode } = require("./类.js");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let left = head;
  let right = head;

  while (n > 0 && right) {
    right = right.next;
    n--;
  }

  if (n === 0 && head && !right) {
    head = head.next;
  }

  while (right && right.next) {
    right = right.next;
    left = left.next;
  }

  if (left) {
    left.next = left.next ? left.next.next : null;
  }

  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 既然边界不好处理，那就左侧添加一个赋值节点
var removeNthFromEnd2 = function (head, n) {
  const tempNode = new LinkedListNode(-1);
  tempNode.setNext(head);
  let left = tempNode;
  let right = tempNode;

  while (n--) {
    right = right ? right.next : null;
  }

  while (right && right.next) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;
  return tempNode.next;
};
