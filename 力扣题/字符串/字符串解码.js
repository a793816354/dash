const Stack = require("../../类/Stack.js");

/**
 * @param {string} s
 * @return {string}
 */
// var decodeString = function (s) {
//   const stack = new Stack();
//   let str = "";
//   let result = "";
//   let levelNum = 0;

//   for (let j = 0; j < s.length; j++) {
//     const word = s[j];

//     if (word === "[") {
//       levelNum++;
//     }

//     if (!isNaN(word) || levelNum !== 0) {
//       stack.push(word);
//     }

//     if (!levelNum && word !== "]" && isNaN(word)) {
//       result += word;
//     }

//     if (word === "]") {
//       while (stack.top() !== undefined) {
//         if (stack.top() === "[") {
//           levelNum--;
//           stack.pop();
//           let power = 0;
//           let num = 0;
//           while (!isNaN(stack.top())) {
//             num += Number(stack.top()) * Math.pow(10, power);
//             stack.pop();
//             power++;
//           }
//           console.log("num");
//           console.log(num);

//           let revStr = "";
//           for (let i = str.length - 1; i >= 0; i--) {
//             revStr += str[i];
//           }

//           if (levelNum) {
//             for (let j = 0; j < num - 1; j++) {
//               str += revStr;
//             }
//           } else {
//             for (let j = 0; j < num; j++) {
//               result += revStr;
//             }
//             str = "";
//           }

//           //   console.log(levelNum);
//         } else {
//           if (stack.top() !== "]") {
//             str += stack.top();
//           }

//           stack.pop();
//         }
//       }
//     }
//   }

//   return result;
// };
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = new Stack();
  let result = "";
  let levelNum = 0;

  for (let index = 0; index < s.length; index++) {
    const word = s[index];

    if (word === "[") {
      levelNum++;
      // continue;
    }
    if (word === "]") {
      levelNum--;
      let str = "";
      let finalStr = "";
      while (stack.top() !== "[") {
        str += stack.top();
        stack.pop();
      }
      stack.pop();

      let power = 0;
      let num = 0;
      while (!isNaN(stack.top())) {
        num += Number(stack.top()) * Math.pow(10, power);
        power++;
        stack.pop();
      }

      for (let j = 0; j < num; j++) {
        finalStr += str;
      }

      stack.push(finalStr);
      continue;
    }
    stack.push(word);
  }

  while (stack.top()) {
    result += stack.top();
    stack.pop();
  }
  return result.split("").reverse().join("");
};
// console.log(decodeString("3[a]2[bc]"));
// console.log(decodeString("3[a2[c]]"));
// console.log(decodeString("2[abc]3[cd]ef"));
console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"));
