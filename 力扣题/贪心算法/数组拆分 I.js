/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = (nums) => {
  nums.sort((a, b) => a - b);
  let result = 0;
  for (let index = 1; index < nums.length; index++) {
    if (index % 2 !== 0) {
      result += nums[index - 1];
    }
  }
  return result;
};

console.log(arrayPairSum([1, 4, 3, 2]));
