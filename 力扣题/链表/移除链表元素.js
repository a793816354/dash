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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let tempNode = new LinkedListNode(-1);
  tempNode.setNext(head);
  let tempHead = tempNode;

  while (tempNode) {
    const nextNode = tempNode.next;
    if (nextNode && nextNode.val === val) {
      tempNode.next = nextNode.next;
    } else {
      tempNode = nextNode;
    }
  }

  return tempHead.next;
};

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements2 = function (head, val) {
  if (head && head.next) {
    let flag = head.next.val === val;
    head.next = removeElements2(flag ? head.next.next : head.next);
  }
  console.log(head);
  console.log(val);
  return head && head.val !== val ? head : null;
};
