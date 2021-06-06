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
// const test = new LinkedListNode(1).setNext(
//   new LinkedListNode(2).setNext(
//     new LinkedListNode(2).setNext(new LinkedListNode(1))
//   )
// );
// const test = new LinkedListNode(1).setNext(
//   new LinkedListNode(2).setNext(new LinkedListNode(1))
// );
// const test = new LinkedListNode(1).setNext(
//   new LinkedListNode(2).setNext(
//     new LinkedListNode(2).setNext(new LinkedListNode(1))
//   )
// );
const test = new LinkedListNode(1).setNext(
  new LinkedListNode(2).setNext(new LinkedListNode(1))
);

// var isPalindrome = function (head) {
//   let temp = head;
//   let right = null;
//   let length = 0;
//   let index = 0;
//   while (temp) {
//     console.log(head);
//     length++;
//     const tempNode = new LinkedListNode(temp.val);
//     temp = temp.next;

//     tempNode.setNext(right);
//     right = tempNode;
//   }

//   while (index < length / 2 && right && head) {
//     // console.log(index);
//     index++;
//     // console.log(right);
//     // console.log(right.val);
//     // console.log(head);
//     // console.log(head.val);
//     // console.log("------------");
//     if (!right || !head || right.val !== head.val) {
//       return false;
//     }
//     right = right.next;
//     head = head.next;
//   }
//   return true;
// };
// console.log(isPalindrome(test));

const reverse = (head, slow) => {
  let revNode = null;
  while (head !== slow) {
    const nextNode = head.next;
    head.next = revNode;
    revNode = head;
    head = nextNode;
  }
  return revNode;
};
var isPalindrome2 = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let rightNode = fast ? slow.next : slow;
  let leftNode = reverse(head, slow);
  while (rightNode && leftNode) {
    if (rightNode.val === leftNode.val) {
      rightNode = rightNode.next;
      leftNode = leftNode.next;
    } else {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome2(test));
