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
    const head = new ListNode()
    let cur = head
    while (l1 && l2) {
        if (l1.val < l2.val) {
            const l1Next = l1.next
            cur.next = l1
            cur = l1
            l1 = l1Next
        } else {
            const l2Next = l2.next
            cur.next = l2
            cur = l2
            l2 = l2Next
        }
        // console.log(cur);
    }
    if (l1) cur.next = l1
    if (l2) cur.next = l2
    return head.next
};

// 1, 4, 5
// 2, 3, 6
// [1, 2, 4]
// [1, 3, 4]