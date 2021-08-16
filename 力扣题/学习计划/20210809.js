const { getRandomArr,swap,isSorted} = require("../../资源")

const quickSort = arr=>{
    quickSortFunc(arr,0,arr.length-1)
    return arr
}

const quickSortFunc = (arr,start,end)=>{
    if(start>=end) return 
    const midIndex = getMid(arr,start,end)
    quickSortFunc(arr,start,midIndex-1)
    quickSortFunc(arr,midIndex+1,end)
}

const getMid = (arr,start,end)=>{
    const randomIndex =start+Math.floor(Math.random()*(end-start))
    swap(arr,randomIndex,start)
    const pivot =  arr[start]
    let left = start+1
    let right = end
    while(left<right){
        while(left<right&&arr[left]<=pivot)left++
        while(left<right&&arr[right]>=pivot)right--
        if(left<right){
            swap(arr,left,right)
            left++
            right--
        }
    }
    if(left===right&&arr[right]>pivot) right--
    swap(arr,start,right)
    return right
}

const randomArr = getRandomArr()
console.log(randomArr);
console.log(quickSort(randomArr));
console.log(isSorted(randomArr));
