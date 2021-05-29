/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const set = new Set();
  let listA = headA;
  let listB = headB;
  while (listA) {
    set.add(listA);

    listA = listA.next;
  }

  while (listB) {
    if (set.has(listB)) {
      return listB;
    }
    listB = listB.next;
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode2 = function (headA, headB) {
  let listA = headA;
  let listB = headB;
  while (listA) {
    listA = listA.next;
  }

  return null;
};
