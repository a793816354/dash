var LinkedListNode = function (val) {
  this.val = val;
  this.next = null;
};
LinkedListNode.prototype.setNext = function (node) {
  this.next = node;
  return this;
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
var mergeTwoLists = function (l1, l2) {
  let head = null;

  if (!l1 || (l2 && l1.val > l2.val)) {
    head = l2;
  } else if (!l2 || (l1 && l1.val <= l2.val)) {
    head = l1;
  }

  let cur = head;

  while (l1 || l2) {
    if (cur && cur === l1) {
      if (!l2 || (l1.next && l1.next.val <= l2.val)) {
        l1 = l1.next;
        cur = l1 ? l1 : l2;
      } else {
        const nextNode = l1.next;
        l1.next = l2;
        l1 = nextNode;
        cur = l2 ? l2 : l1;
      }
    } else if (cur && cur === l2) {
      if (!l1 || (l2.next && l2.next.val <= l1.val)) {
        l2 = l2.next;
        cur = l2 ? l2 : l1;
      } else {
        const nextNode = l2.next;
        l2.next = l1;
        l2 = nextNode;
        cur = l1 ? l1 : l2;
      }
    }
  }
  return head;
};
let result = mergeTwoLists(
  new LinkedListNode(1).setNext(
    new LinkedListNode(2).setNext(new LinkedListNode(4))
  ),
  new LinkedListNode(1).setNext(
    new LinkedListNode(3).setNext(new LinkedListNode(4))
  )
);
// console.log(result);

while (result) {
  console.log(result.val);
  result = result.next;
}
