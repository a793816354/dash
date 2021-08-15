// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function (board) {
//   if (!board.length) return true;

//   const rowSet = new Set();
//   const colSetArr = [];
//   const nineCellSetArr = [];

//   for (let i = 0; i < board.length; i++) {
//     const row = board[i];
//     rowSet.clear();
//     for (let j = 0; j < row.length; j++) {
//       if (!colSetArr[j]) {
//         colSetArr.push(new Set());
//       }

//       if (i % 3 === 0 && j % 3 === 0) {
//         if (!j) {
//           nineCellSetArr.push([]);
//         }

//         nineCellSetArr[nineCellSetArr.length - 1].push(new Set());
//       }

//       const ele = row[j];
//       if (ele === ".") continue;

//       const curColSet = colSetArr[j];

//       const curNineCellSet =
//         nineCellSetArr[Math.floor(i / 3)][Math.floor(j / 3)];
//       if (rowSet.has(ele) || curColSet.has(ele) || curNineCellSet.has(ele))
//         return false;

//       rowSet.add(ele);
//       curColSet.add(ele);
//       curNineCellSet.add(ele);
//     }
//   }
//   return true;
// };

// console.log(
//   isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ])
// );

// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
// var setZeroes = function (matrix) {
//   const colSet = new Set();

//   for (let i = 0; i < matrix.length; i++) {
//     const row = matrix[i];
//     let flag = false;
//     for (let j = 0; j < row.length; j++) {
//       const ele = row[j];
//       if (!ele) {
//         flag = true;
//         colSet.add(j);
//       }
//     }

//     if (flag) {
//       for (let index = 0; index < row.length; index++) {
//         row[index] = 0;
//       }
//     }
//   }

//   for (const item of colSet.values()) {
//     for (let i = 0; i < matrix.length; i++) {
//       for (let index = 0; index < matrix[i].length; index++) {
//         if (index === item) {
//           matrix[i][index] = 0;
//         }
//       }
//     }
//   }
//   return matrix;
// };
// console.log(
//   setZeroes([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5],
//   ])
// );

/**
 * @param {string} s
 * @return {number}
 */
// set
// var firstUniqChar = function (s) {
//   const set = new Set();
//   const repeatSet = new Set();
//   for (let index = 0; index < s.length; index++) {
//     if (set.has(s[index])) {
//       repeatSet.add(s[index]);
//     } else {
//       set.add(s[index]);
//     }
//   }

//   for (let index = 0; index < s.length; index++) {
//     if (!repeatSet.has(s[index])) {
//       return index;
//     }
//   }
//   return -1;
// };

/**
 * @param {string} s
 * @return {number}
 */
// map
// var firstUniqChar = function (s) {
//   const map = {};
//   for (let index = 0; index < s.length; index++) {
//     const char = s[index];
//     if (map[char]) {
//       map[char]++;
//     } else {
//       map[char] = 1;
//     }
//   }

//   for (const key in map) {
//     if (map[key] === 1) {
//       for (let index = 0; index < s.length; index++) {
//         if (s[index] === key) {
//           return index;
//         }
//       }
//     }
//   }
//   return -1;
// };

// /**
//  * @param {string} s
//  * @return {number}
//  */
// // 26个字母对应数组位置
// var firstUniqChar = function (s) {
//   const arr = Array(26).fill(-1);
//   const startNum = "a".charCodeAt(0);

//   for (let index = 0; index < s.length; index++) {
//     const ele = s[index];
//     const eleNum = ele.charCodeAt(0);
//     arr[eleNum - startNum]++;
//   }

//   for (let index = 0; index < s.length; index++) {
//     const ele = s[index];
//     const eleNum = ele.charCodeAt(0);
//     if (!arr[eleNum - startNum]) return index;
//   }
//   return -1;
// };
// console.log(firstUniqChar("loveleetcode"));

// /**
//  * @param {string} ransomNote
//  * @param {string} magazine
//  * @return {boolean}
//  */
// // map
// var canConstruct = function (ransomNote, magazine) {
//   const charMap = {};
//   for (let index = 0; index < magazine.length; index++) {
//     const char = magazine[index];
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   for (let index = 0; index < ransomNote.length; index++) {
//     const char = ransomNote[index];
//     if (!charMap[char]) return false;

//     charMap[char]--;
//   }
//   return true;
// };

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// var canConstruct = function (ransomNote, magazine) {
//   const charMap = Array(26).fill(0);
//   const startNum = "a".charCodeAt(0);

//   for (let index = 0; index < magazine.length; index++) {
//     const char = magazine[index];
//     const charNum = char.charCodeAt(0);
//     charMap[charNum - startNum]++;
//   }

//   for (let index = 0; index < ransomNote.length; index++) {
//     const char = ransomNote[index];
//     const charNum = char.charCodeAt(0);
//     if (!charMap[charNum - startNum]) return false;
//     charMap[charNum - startNum]--;
//   }
//   return true;
// };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  var isAnagram = function (s, t) {
//     if (s.length !== t.length) return false;

//     const sArr = s.split("");
//     const tArr = t.split("");

//     sArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
//     tArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
//     for (let index = 0; index < sArr.length; index++) {
//       if (sArr[index] !== tArr[index]) {
//         return false;
//       }
//     }
//     return true;
//   };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 26单词映射到数组
// var isAnagram = function (s, t) {
//   const charMap = Array(26).fill(0);
//   const startNum = "a".charCodeAt(0);

//   for (let index = 0; index < s.length; index++) {
//     const char = s[index];
//     const charNum = char.charCodeAt(0);
//     charMap[charNum - startNum]++;
//   }

//   for (let index = 0; index < t.length; index++) {
//     const char = t[index];
//     const charNum = char.charCodeAt(0);
//     charMap[charNum - startNum]--;
//   }

//   for (let index = 0; index < charMap.length; index++) {
//     if (charMap[index]) {
//       return false;
//     }
//   }
//   return true;
// };

console.log(isAnagram("anagram", "nagaram"));
