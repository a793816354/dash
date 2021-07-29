const {getRandomArr,swap} = require('../tool')

const selectionSort = array=>{
    for (let i = 0; i < array.length-1; i++) {
        let minIndex = i
        for (let j = i+1; j < array.length; j++) {
            if(array[minIndex]>array[j]){
                minIndex = j
            }
        }
        swap(array,minIndex,i)
    }
    return array
}

console.log(selectionSort(getRandomArr()));