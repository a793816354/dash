const wrap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const shouldWrap = (a, b) => {
  return Number(`${a}` + `${b}`) > Number(`${b}` + `${a}`);
};

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  let lastIndex = nums.length - 1;

  for (let i = 0; i < nums.length - 1; i++) {
    let flag = false;
    let swapIndex = -1;
    for (let j = 0; j < lastIndex; j++) {
      let ele = nums[j];
      let nextEle = nums[j + 1];

      if (shouldWrap(ele, nextEle)) {
        wrap(nums, j, j + 1);
        swapIndex = j;
        flag = true;
      }
    }
    if (!flag) break;
    lastIndex = swapIndex;
  }

  let result = "";
  for (let index = 0; index < nums.length; index++) {
    result += `${nums[index]}`;
  }

  return result;
};
console.log(minNumber([3, 30, 34, 5, 9]));
