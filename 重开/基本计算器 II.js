// /**
//  * @param {string} s
//  * @return {number}
//  */
// var calculate = function(s) {
//     let preSign = "+"
//     let num = 0
//     let result = 0
//     const stack = []
//     for (let index = 0; index < s.length; index++) {
//         const ele = s[index];
//         if(ele!==" "&&!isNaN(ele)){
//             num = 10*num+Number(ele)
//         }
//         if(isNaN(ele)||index===s.length-1){
//             switch(preSign){
//                 case "+":stack.push(num);break
//                 case "-":stack.push(-num);break
//                 case "*":stack.push(stack.pop()*num);break
//                 case "/":stack.push(parseInt(stack.pop()/num));break
//             }
//             num = 0
//             preSign = ele
//         }
//     }
//     while(stack.length){
//         result+=stack.pop()
//     }
//     return result
// };

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const signStack = [];
  const stack = [];
  let num = 0;
  for (let index = 0; index < s.length; index++) {
    const ele = s[index];
    if (ele !== " " && !isNaN(ele)) {
      num = 10 * num + Number(ele);
    }

    if (isNaN(ele) || index === s.length - 1) {
      //   console.log(num);
      stack.push(num);
      num = 0;

      const top = signStack[signStack.length - 1];

      if (top === "*") {
        const first = stack.pop();
        const second = stack.pop();
        stack.push(first * second);
        signStack.pop();
      } else if (top === "/") {
        const first = stack.pop();
        const second = stack.pop();
        stack.push(parseInt(second / first));
        signStack.pop();
      }

      if (isNaN(ele)) {
        signStack.push(ele);
      }
    }
  }
  //   console.log(signStack);
  //   console.log(stack);
  if (!signStack.length) return stack.pop();
  let result = 0;
  const queue = stack.slice();
  const signQueue = signStack.slice();
  while (signQueue.length) {
    const topSign = signQueue.shift();
    const first = queue.shift();
    const second = queue.shift();

    let cur = 0;
    if (topSign === "+") {
      cur = first + second;
    } else {
      cur = first - second;
    }

    result = cur;
    queue.unshift(cur);
  }
  return result;
};
console.log(calculate("3+2*234+5"));
console.log(calculate("3+2*2"));
console.log(calculate(" 3/2 "));
console.log(calculate("0-2147483647"));
console.log(calculate("1-1+1"));
console.log(calculate("1+1-1"));
