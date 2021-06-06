var LinkedListNode = function (val) {
  this.val = val;
};
LinkedListNode.prototype.setNext = function (node) {
  this.next = node;
};

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function (val) {
  this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let result = this.head;
  while (index > 0) {
    index--;
    if (result.next) {
      result = result.next;
    } else {
      return -1;
    }
  }
  return result ? result.val : result;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new LinkedListNode(val);
  if (this.head) {
    node.setNext(this.head);
    this.head = node;
  } else {
    this.head = node;
  }
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new LinkedListNode(val);

  if (this.head) {
    let cur = this.head;
    while (cur && cur.next) {
      cur = cur.next;
    }

    cur.setNext(node);
  } else {
    this.head = node;
  }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  const node = new LinkedListNode(val);

  let cur = this.head;
  while (index > 1 && cur && cur.next) {
    index--;
    cur = cur.next;
  }

  if (index === 1) {
    const nextNode = cur.next;
    node.setNext(nextNode);
    cur.setNext(node);
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index === 0 && this.head) {
    this.head = this.head.next;
    return;
  }

  let cur = this.head;
  while (index > 1 && cur && cur.next) {
    cur = cur.next;
    index--;
  }

  if (index === 1 && cur && cur.next) {
    const nextNextNode = cur.next.next || null;
    cur.setNext(nextNextNode);
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);
console.log(myLinkedList.get(1));
myLinkedList.deleteAtIndex(1);
// console.log(myLinkedList);
console.log(myLinkedList.get(1));
console.log(myLinkedList);

module.exports = {
  LinkedListNode,
  MyLinkedList,
};
