const getRandomArr = (num = 20) => {
  const result = Array(num)
    .fill(true)
    .map((item) => Math.floor(Math.random() * num));
  return result;
};


const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const midVal = arr[mid];

  //分区
  const lessArr = [];
  const moreArr = [];
  for (let index = 0; index < arr.length; index++) {
    const ele = arr[index];
    if (index !== mid) {
      if (ele < midVal) {
        lessArr.push(ele);
      } else {
        moreArr.push(ele);
      }
    }
  }  
  return quickSort(lessArr).concat([midVal],quickSort(moreArr))
};
const randomArr = getRandomArr()
console.log(randomArr);
console.log(quickSort(randomArr));
