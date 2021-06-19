/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const obj = {};
  const result = [];
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    obj[num] = (obj[num] || 0) + 1;
  }

  result = Object.entries(obj)
    .sort((a, b) => {
      return b[1] - a[1];
    }).map((item) => item[0]) .slice(0, k);
    
  return result;
};
