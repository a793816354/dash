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
// var middleNode = function (head) {
//   let left = head;
//   let right = head;

//   while (right && right.next) {
//     left = left.next;

//     right = right.next;
//     if (right) {
//       right = right.next;
//     }
//   }
//   return left;
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
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//   let length = 0;
//   let lengthNode = head;
//   while (lengthNode) {
//     lengthNode = lengthNode.next;
//     length++;
//   }

//   const preHead = { next: head };
//   let node = preHead;
//   let index = length - n;

//   while (node && index) {
//     node = node.next;
//     index--;
//   }
//   if (node && node.next) {
//     node.next = node.next.next;
//   }
//   return preHead.next;
// };

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let left = 0;
//   let right = 0;
//   let max = 0;
//   let curSet = new Set();

//   while (right < s.length) {
//     const ele = s[right];
//     if (!curSet.has(ele)) {
//       curSet.add(ele);
//       right++;
//     } else {
//       if (right - left > max) {
//         max = right - left;
//       }
//       left++;
//       right = left;
//       curSet.clear();
//     }
//   }

//   if (right - left > max) {
//     max = right - left;
//   }

//   return max;
// };
// console.log(lengthOfLongestSubstring("dvdf"));

const getMap = (s) => {
  const map = {};
  for (let index = 0; index < s.length; index++) {
    const ele = s[index];

    if (map[ele]) {
      map[ele]++;
    } else {
      map[ele] = 1;
    }
  }
  return map;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let countNum = s1.length;
  let map = getMap(s1);
  for (let index = 0; index < s2.length; index++) {
    const ele = s2[index];
    if (map[ele] !== undefined) {
      if (map[ele]) {
        map[ele]--;
        countNum--;

        if (!countNum) return true;
      } else {
        index -= s1.length - countNum;
        map = getMap(s1);
        countNum = s1.length;
      }
    } else {
      index -= s1.length - countNum;
      map = getMap(s1);
      countNum = s1.length;
    }
  }
  return false;
};

console.log(checkInclusion("adc", "dcda"));
