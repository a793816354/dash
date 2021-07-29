const {    getRandomArr,swap} = require('../tool')


// 优化
const insertSort = array=>{
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j >0; j--) {
            if(array[j]<array[j-1]){
                swap(array,j,j-1)
            }
        }
    }
    return array
}
console.log(insertSort(getRandomArr()));