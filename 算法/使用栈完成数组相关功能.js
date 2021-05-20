const Stack = require("../类/Stack");

const arr = Array(20)
  .fill(1)
  .map((item) => Math.floor(Math.random() * 20));
// const arr = Array(20)
//   .fill(1)
//   .map((item, i) => i);

// const arr2 = Array(20).fill(1).map(item=>Math.floor(Math.random()*20))
const arr2 = Array(10)
  .fill(1)
  .map((item, i) => i);
console.log(arr);
console.log(arr2);

var fruits = ["Banana", "Orange", "Apple", "Mango"];

// 1.是否需要记录
// 2.先塞入的是否最后弹出（动态增减）
// 3.如何（何时何地）记录

// 倒序全部塞入在推出
// const concat = () => {
//     const stack = new Stack()
//     const result = []

//     for (let i = arr.length+arr2.length-1; i >=0; i--) {
//         if(i>=arr.length){
//             stack.push(arr2[i-arr.length])
//         }else{
//             stack.push(arr[i])
//         }

//     }

//     while(!stack.empty()){
//         result.push(stack.top())
//         stack.pop()
//     }

//     return result
// }

// console.log(concat());

// const copyWithin = (target, start, end)=>{
//     const tempArr = arr.slice()
//     const stack = new Stack()
//     //先倒序收集需要的元素
//     for (let i = end-1; i >= start; i--) {
//         stack.push(tempArr[i])
//     }

//     //到位置之后开始连续推出栈
//     for (let i = 0; i < tempArr.length; i++) {
//         if(i>= target&&!stack.empty()){
//             tempArr[i] = stack.top()
//             stack.pop()
//         }
//     }
//     return tempArr
// }

// console.log(copyWithin(3,0,4));

// const entries = () => {
//   const stack = new Stack();
//   const result = {};
//   let length = 0;
//   for (let i = fruits.length - 1; i >= 0; i--) {
//     stack.push([i, fruits[i]]);
//     length++;
//   }

//   while (!stack.empty()) {
//     const [i, value] = stack.top();
//     result[i] = value;
//     stack.pop();
//   }
//   result.length = length;
//   result[Symbol.iterator] = Array.prototype[Symbol.iterator];

//   for (let item of result) {
//     console.log(item); // 'a', 'b', 'c'
//   }

//   return result;
// };
// console.log(entries());
// console.log(fruits.entries());
// console.log(Array[Symbol.iterator]);
// console.log(new Array()[Symbol.iterator]);

// const filter = (fn) => {
//   const stack = new Stack();
//   const result = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (fn(arr[i], i, arr)) {
//       stack.push(arr[i]);
//     }
//   }

//   while (stack.top()) {
//     result.push(stack.top());
//     stack.pop();
//   }
//   return result;
// };

// console.log(filter((item) => item > 10));

// Array.from(object, mapFunction, thisValue)
// const from = (obj, mapFunction, thisValue) => {
//   const result = [];

//   if (obj.length) {
//     for (let i = 0; i < obj.length; i++) {
//       if (mapFunction) {
//         result.push(mapFunction(obj[i], i, obj));
//         continue;
//       }
//       result.push(obj[i]);
//     }
//   }

//   return result;
// };
// const obj = Object.fromEntries(arr.entries());
// obj.length = arr.length;
// console.log(from(obj, (item) => (item % 2 === 0 ? item : 520)));

// const reduce = (fn, initData) => {
//   const stack = new Stack();

//   for (let i = arr.length - 1; i >= 0; i--) {
//     stack.push(arr[i]);
//   }
//   let pre = initData;
//   while (stack.top() !== undefined) {
//     pre = fn(pre, stack.top());
//     stack.pop();
//   }
//   return pre;
// };

// console.log(
//   reduce((pre, now) => {
//     return pre + now;
//   }, 0)
// );

// const shift = () => {
//   const result = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     arr[i - 1] = arr[i];
//   }
//   arr.length--;
//   return result;
// };
// console.log(shift());
// console.log(arr);

// const sort = (fn) => {
//   for (let index = 0; index < arr.length; index++) {
//     for (let i = 1; i < arr.length - index; i++) {
//       if (fn(arr[i - 1], arr[i]) > 0) {
//         const temp = arr[i - 1];
//         arr[i - 1] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   return arr;
// };

// console.log(sort((a, b) => b - a));

const splice = (target, howmany, ...more) => {
  const stack = new Stack();
  const lessLength = more.length - howmany;

  for (let index = arr.length - 1; index >= 0; index--) {
    if (index > target && index < target + howmany) {
      continue;
    }

    if (index === target) {
      let moreIndex = more.length - 1;
      while (moreIndex >= 0) {
        stack.push(more[moreIndex]);
        moreIndex--;
      }
      continue;
    }

    stack.push(arr[index]);
  }

  let index = 0;
  while (stack.top() !== undefined) {
    arr[index] = stack.top();
    stack.pop();
    index++;
  }

  if (lessLength < 0) {
    for (let index = 0; index < Math.abs(lessLength); index++) {
      arr.length--;
    }
  }
};
