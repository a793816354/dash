const sortArray = (arr) => {
  const counting = [];
  for (let index = 0; index < arr.length; index++) {
    const ele = arr[index];
    if (counting[ele]) {
      counting[ele]++;
    } else {
      counting[ele] = 1;
    }
  }

  let preSum = 0;
  for (let index = 0; index < counting.length; index++) {
    const temp = counting[index] || 0;
    counting[index] = preSum;
    preSum += temp;
  }

  const result = [];
  for (let index = 0; index < arr.length; index++) {
    const ele = arr[index];
    const countIndex = counting[ele];
    result[countIndex] = ele;
    counting[ele]++;
  }

  for (let index = 0; index < result.length; index++) {
    arr[index] = result[index];
  }
  return arr;
};
console.log(sortArray([5, 2, 3, 1]));
