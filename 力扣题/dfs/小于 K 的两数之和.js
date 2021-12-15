/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function (nums, k) {
    nums.sort((a, b) => a - b)
    let left = 0
    let right = nums.length - 1
    max = -1
    while (left < right) {
        const sum = nums[left] + nums[right]
        if (sum >= k) {
            right--
        } else {
            left++
            max = Math.max(max, sum)
        }
    }
    return max
};