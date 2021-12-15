// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var isPalindrome = function (head) {
//   const arr = [];
//   while (head) {
//     arr.push(head.val);
//     head = head.next;
//   }
//   for (let index = 0; index < arr.length / 2; index++) {
//     if (arr[index] !== arr[arr.length - 1 - index]) {
//       return false;
//     }
//   }
//   return true;
// };

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
// var valid = function (head) {
//   const stack = [];
//   while (head) {
//     if (head.val === stack[stack.length - 1]) {
//       stack.pop();
//     } else {
//       stack.push(head.val);
//     }
//     head = head.next;
//   }
//   return stack.length < 2;
// };

// var isPalindrome = function (head) {
//   let tempHead = head;
//   let pre = null;
//   let low = head;
//   let fast = head;
//   //false奇数,true偶数
//   let flag = true;
//   while (fast) {
//     if (fast.next) {
//       fast = fast.next.next;
//     } else {
//       flag = false;
//       fast = null;
//       break;
//     }
//     pre = low;
//     low = low.next;
//   }

//   //   奇数;
//   if (!flag && pre && low) {
//     pre.next = low.next;
//   }

//   return valid(tempHead);
// };

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
// var isPalindrome = function (head) {
//   if (!head) return true;
//   let flag = true;
//   let tempHead = head;
//   const dfs = (root) => {
//     if (!root.next) return root;
//     const node = dfs(root.next);
//     if (tempHead.val !== node.val) {
//       flag = false;
//     } else {
//       tempHead = tempHead.next;
//     }
//     return root;
//   };
//   dfs(head);
//   return flag;
// };
