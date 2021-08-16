const { getRandomArr, swap, isSorted } = require("../../../资源");
//常规
// const countingSort = arr=>{
//     const counting = []
//     for (let index = 0; index < arr.length; index++) {
//         const ele = arr[index]
//        if(counting[ele]) {
//            counting[ele]++
//        }else{
//            counting[ele] = 1
//        }
//     }
//     let i = 0
//     for (let index = 0; index < counting.length; index++) {
//         while(counting[index]){
//             counting[index]--
//             arr[i++] = index
//         }
//     }
//     return arr
// }

//控制稳定性
// const countingSort = arr=>{
//     const counting = []
//     for (let index = 0; index < arr.length; index++) {
//         const ele = arr[index]
//        if(counting[ele]) {
//            counting[ele].push(ele)
//        }else{
//            counting[ele] = [ele]
//        }
//     }
//     let i = 0
//     for (let index = 0; index < counting.length; index++) {
//         while(counting[index]&&counting[index].length){
//             arr[i++] = counting[index].shift()
//         }
//     }
//     return arr
// }

//使用标准计数排序
const countingSort = (arr) => {
  const counting = [];
  for (let index = 0; index < arr.length; index++) {
    const ele = arr[index];
    if (counting[ele]) {
      counting[ele]++;
    } else {
      counting[ele] = 1;
    }
  }
  let preSize = 0;
  for (let index = 0; index < counting.length; index++) {
    const temp = counting[index]||0;
    counting[index] = preSize;
    preSize += temp;
  }

  const result = [];
  for (let index = 0; index < arr.length; index++) {
    const ele = arr[index];
    const countEle = counting[ele];
    result[countEle] = ele
    counting[ele]++;
  }

  for (let index = 0; index < arr.length; index++) {
    arr[index] = result[index];
  }
  return arr;
};

const randomArr = getRandomArr();
console.log(randomArr);
console.log(countingSort(randomArr));
console.log(isSorted(randomArr));
