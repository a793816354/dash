var LinkedListNode = function (val) {
  this.val = val;
  this.next = null;
};
LinkedListNode.prototype.setNext = function (node) {
  this.next = node;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const head = new LinkedListNode(-1);
  let cur = head;
  let flag = false;

  while (l1 || l2) {
    const l1Value = l1 ? l1.val : 0;
    l1 = l1 ? l1.next : null;
    const l2Value = l2 ? l2.val : 0;
    l2 = l2 ? l2.next : null;

    const total = l1Value + l2Value + Number(flag);
    flag = total >= 10;
    const nextNode = new LinkedListNode(total % 10);
    cur.setNext(nextNode);
    cur = nextNode;
  }

  if (flag) {
    cur.next = new LinkedListNode(1);
  }

  return head.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//原地改
var addTwoNumbers2 = function (l1, l2) {
  //   const head = new LinkedListNode(-1);
  let head = l1;
  let lastNode = null;

  let flag = false;

  while (l1 || l2) {
    const l1Value = l1 ? l1.val : 0;
    const l2Value = l2 ? l2.val : 0;
    const total = l1Value + l2Value + Number(flag);
    flag = total >= 10;

    if (l1) {
      l1.val = total % 10;
      if (l1.next) {
        l1 = l1.next;
      } else {
        l1.next = l2 ? l2.next : null;
        lastNode = l1;
        l1 = l1.next;
        l2 = null;
      }
    }

    l2 = l2 ? l2.next : null;
  }

  if (flag) {
    lastNode.next = new LinkedListNode(1);
  }

  return head;
};
