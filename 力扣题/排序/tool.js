const getRandomArr = (length=20)=>{
   const randomArr= Array(length).fill(true).map(item=>Math.floor(Math.random()*length))
   console.log(randomArr);
   return randomArr
}


const swap = (arr,i,j)=>{
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

module.exports = {
    getRandomArr,
    swap
}