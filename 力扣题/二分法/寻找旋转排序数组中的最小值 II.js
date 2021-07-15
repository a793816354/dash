// 思考：可能出现的情况
// 1.345555012;
// 2.3450000012;
// 3.3455550000012;

// 思路：1.由于前一个与后一个可能重复，所以重复的时候不知道向前还是向后
// 2.此时需要left与mid进行比较，确定左右
// 3.mid还是照常找比左边小的那个，找到即返回
// 4.有重复项，且判断左右，所以不能left=right作为while条件

// 总结：此题的主要点在于碰到重复值时确定左右区间选择
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === nums[mid + 1]) {
      if (nums[left] <= nums[mid]) {
        left = mid+1;
      } else {
        right = mid;
      }
    } else if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if (nums[left] < nums[mid]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return nums[0];
};
// console.log(findMin([2, 2, 2, 0, 1]));
// console.log(findMin([3, 1]));
console.log(findMin([10,1,10,10,10]));
