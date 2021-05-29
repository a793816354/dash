/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//散列表
var hasCycle = function (head) {
  const set = new Set();
  while (head) {
    if (set.has(head)) {
      return true;
    }

    set.add(head);
    head = head.next;
  }

  return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针
var hasCycle2 = function (head) {
  let slow = head;
  let quick = head;

  while (quick) {
    slow = slow.next;
    quick = quick.next ? quick.next.next : null;

    if (quick && slow === quick) {
      return true;
    }
  }

  return false;
};
