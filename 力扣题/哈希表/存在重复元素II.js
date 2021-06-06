/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const obj = {};
  for (let index = 0; index < nums.length; index++) {
    const ele = nums[index];
    if (obj[ele] !== undefined && Math.abs(obj[ele] - index) <= k) {
      return true;
    } else {
      obj[ele] = index;
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1,0,1,1],1));
