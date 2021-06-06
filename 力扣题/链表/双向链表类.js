var DoublyListNode = function (val) {
  this.val = val;
  this.prev = null;
  this.next = null;
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
  let node = this.head;
  while (node && index > 0) {
    index--;
    node = node.next;
  }

  return node ? node.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new DoublyListNode(val);
  if (!this.head) {
    this.head = newNode;
    return;
  }

  newNode.next = this.head;
  this.head.prev = newNode;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new DoublyListNode(val);
  if (!this.head) {
    this.head = newNode;
    return;
  }

  let node = this.head;
  while (node && node.next) {
    node = node.next;
  }
  node.next = newNode;
  newNode.prev = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new DoublyListNode(val);
  if (!this.head) {
    this.head = newNode;
    return;
  }

  let node = this.head;
  while (node && index > 1) {
    index--;
    node = node.next;
  }

  if (index === 1 && node) {
    const prevNextNode = node.next;
    node.next = newNode;
    newNode.prev = node;
    newNode.next = prevNextNode;
    prevNextNode.prev = newNode;
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let node = this.head;
  while (node && index > 0) {
    index--;
    node = node.next;
  }

  if (!index && node && node.next) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
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

// [
//   "MyLinkedList",
//   "addAtHead",
//   "addAtTail",
//   "addAtIndex",
//   "get",
//   "deleteAtIndex",
//   "get",
// ][([], [1], [3], [1, 2], [1], [1], [1])];
const list = new MyLinkedList();
list.addAtHead(1);
list.addAtTail(3);
list.addAtIndex(1, 2);
console.log(list.get(1));
list.deleteAtIndex(1);
console.log(list.get(1));
console.log(list);
