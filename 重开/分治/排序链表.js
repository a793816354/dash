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
// 1, 4, 5
// 2, 3, 6
// var mergeTwoLists = function (l1, l2) {
//     if (!l1) return l2
//     if (!l2) return l1
//     if (l1.val < l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2)
//         return l1
//     }
//     l2.next = mergeTwoLists(l2.next, l1)
//     return l2
// };
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
    }
    if (l1) cur.next = l1
    if (l2) cur.next = l2
    return head.next
};


const mergeSort = (head, end) => {
    if (!head) return null
    if (head.next === end) {
        head.next = null
        return head
    }

    let slow = head
    let fast = head
    while (fast !== end) {
        slow = slow.next
        fast = fast.next
        if (fast !== end) {
            fast = fast.next
        }
    }

    return mergeTwoLists(mergeSort(head, slow), mergeSort(slow, end))
}

var sortList = function (head) {
    return mergeSort(head, null)
};

// 1,2,3,4,5