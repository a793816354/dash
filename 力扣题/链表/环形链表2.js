/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//散列表
var detectCycle = function (head) {
  const set = new Set();

  while (head) {
    if (set.has(head)) {
      return head;
    }
    set.add(head);
    head = head.next;
  }

  return null;
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
 * @return {ListNode}
 */
// 快慢指针
var detectCycle2 = function (head) {
  let slow = head;
  let fast = head;

  while (fast) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;

    if (fast && fast === slow) {
      break;
    }
  }

  if (fast) {
    slow = head;

    while (slow) {
      if (slow === fast) {
        return slow;
      }

      slow = slow.next;
      fast = fast.next;
    }
  }

  return null;
};
