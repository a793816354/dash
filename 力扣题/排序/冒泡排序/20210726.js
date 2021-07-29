const {    getRandomArr,swap} = require('../tool')

// 基本
// const bubbleSort = array=>{
//     for (let i = 0; i < array.length-1; i++) {
//         for (let j = 0; j < array.length-1-i; j++) {
//             if(array[j]>array[j+1]){
//                 swap(array,j,j+1)
//             }
//         }
        
//     }
//     return array
// }

// 优化
const bubbleSort = array=>{
    let lastIndex = array.length-1

    for (let i = 0; i < array.length-1; i++) {
        let flag = false
        let swapIndex = -1
        for (let j = 0; j < lastIndex; j++) {
            if(array[j]>array[j+1]){
                swap(array,j,j+1)
                flag = true
                swapIndex = j
            }
        }
        if(!flag) break
        lastIndex = swapIndex
    }
    return array
}
console.log(bubbleSort(getRandomArr()));