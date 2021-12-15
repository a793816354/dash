/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var find = function (nums, target) {
    let left = 0;
    let right = nums.length;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
};
var fairCandySwap = function (aliceSizes, bobSizes) {
    let aTotal = 0
    let bTotal = 0
    for (let index = 0; index < aliceSizes.length; index++) {
        aTotal += aliceSizes[index];
    }
    for (let index = 0; index < bobSizes.length; index++) {
        bTotal += bobSizes[index];
    }
    aliceSizes.sort((a, b) => a - b)
    bobSizes.sort((a, b) => a - b)

    for (let index = 0; index < aliceSizes.length; index++) {
        const ele = aliceSizes[index];
        const findIndex = find(bobSizes, (bTotal - aTotal + 2 * ele) / 2)
        if (findIndex !== -1) {
            return [aliceSizes[index], bobSizes[findIndex]]
        }
    }
};
