var LinkedListNode = function (val) {
  this.val = val;
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null;

  const arr = [];
  let node = head;
  let length = 0;

  while (node) {
    arr.push(new LinkedListNode(node.val));
    node = node.next;
    length++;
  }

  let formatK = k % length;

  while (formatK) {
    let firstNode = arr[length - 1];
    arr.pop();
    arr.unshift(firstNode);
    firstNode.next = head;
    head = firstNode;
    formatK--;
  }

  let lastNode = head;

  while (length - 1) {
    lastNode = lastNode.next;

    length--;
  }
  lastNode.next = null;

  return head;
};

var LinkedListNode = function (val) {
  this.val = val;
};
LinkedListNode.prototype.setNext = function (node) {
  this.next = node;
};

//原地绕的方式，待做
