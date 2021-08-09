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
 * @param {ListNode} head
 * @return {boolean}
 */
const test = new LinkedListNode(4).setNext(
  new LinkedListNode(2).setNext(new LinkedListNode(1))
);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const getNode = (node, index) => {
  while (index > 0) {
    node = node.next;
    index--;
  }
  return node;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  let tempHead = head;
  //获取长度
  let length = 0;
  while (tempHead) {
    length++;
    tempHead = tempHead.next;
  }

  let index = 1;

  while (index < length) {
    let curIndex = index;
    const outPreNode = getNode(head, curIndex - 1);

    console.log("outPreNodedsads");
    console.log(head);
    console.log(outPreNode);
    const curNode = outPreNode.next;
    const outNextNode = curNode.next;

    let node = head;

    while (node) {
      if (node.val < curNode.val) {
        lastNode = node;
        node = node.next;
      } else {
        curNode.next = node;
        node = curNode;
        outPreNode.next = outNextNode;
        break;
      }
    }
    console.log("nodedasdsa");
    console.log(node);
    index++;
  }
  return head;
};
console.log(insertionSortList(test));
