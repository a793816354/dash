/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let rev = null;

  while (head) {
    const node = head;
    const nextNode = node.next;

    node.next = rev;
    rev = node;

    head = nextNode;
  }

  return rev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 利用返回结果进行拼接
var reverseList2 = function (head) {
  if (head && head.next) {
    const nextNode = head.next;
    head.next = null;
    const rev = reverseList2(nextNode);
    let last = rev;
    while (last.next) {
      last = last.next;
    }
    last.next = head;
    return rev;
  }
  return head;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//基本上没有利用返回结果
var reverseList3 = function (head) {
  if (head && head.next) {
    const nextNode = head.next;
    const rev = reverseList3(nextNode);
    head.next.next = head;
    head.next = null;
    return rev;
  }
  return head;
};
