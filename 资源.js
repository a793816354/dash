const getRandomArr = (num = 20) => {
  const result = Array(num)
    .fill(true)
    .map((item) => Math.floor(Math.random() * num));
  return result;
};

const getSortArr = (num = 20, asc = true) => {
  const result = getRandomArr(num);
  result.sort((a, b) => (asc ? a - b : b - a));
  return result;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const isSorted=arr=>{
  for (let index = 1; index < arr.length; index++) {
    if(arr[index]<arr[index-1])return false
  }
  return true
}

module.exports = {
  getSortArr,
  getRandomArr,
  swap,
  isSorted
};
