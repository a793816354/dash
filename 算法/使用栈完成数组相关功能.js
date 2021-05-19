const Stack = require("../类/Stack");

// const arr = Array(20).fill(1).map(item=>Math.floor(Math.random()*20))
const arr = Array(20)
  .fill(1)
  .map((item, index) => index);

// const arr2 = Array(20).fill(1).map(item=>Math.floor(Math.random()*20))
const arr2 = Array(10)
  .fill(1)
  .map((item, index) => index);
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

//     for (let index = arr.length+arr2.length-1; index >=0; index--) {
//         if(index>=arr.length){
//             stack.push(arr2[index-arr.length])
//         }else{
//             stack.push(arr[index])
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
//     for (let index = end-1; index >= start; index--) {
//         stack.push(tempArr[index])
//     }

//     //到位置之后开始连续推出栈
//     for (let index = 0; index < tempArr.length; index++) {
//         if(index>= target&&!stack.empty()){
//             tempArr[index] = stack.top()
//             stack.pop()
//         }
//     }
//     return tempArr
// }

// console.log(copyWithin(3,0,4));

const entries = () => {
  const stack = new Stack();
  const result = {};
    let length = 0
  for (let index = fruits.length - 1; index >= 0; index--) {
    stack.push([index, fruits[index]]);
    length++
  }

  while (!stack.empty()) {
    const [index, value] = stack.top();
    result[index] = value;
    stack.pop();
  }
  result.length = length
  result[Symbol.iterator] = Array.prototype[Symbol.iterator];
  
  for (let item of result) {
    console.log(item); // 'a', 'b', 'c'
  }

  return result;
};
console.log(entries());
console.log(fruits.entries());
// console.log(Array[Symbol.iterator]);
// console.log(new Array()[Symbol.iterator]);
