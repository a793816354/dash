/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        const mid = left + Math.ceil((right - left) / 2)
        if (arr[mid] < arr[mid - 1]) {
            right = mid - 1
        } else {
            left = mid
        }
    }
    return left
};
console.log(peakIndexInMountainArray([1, 5, 4, 3, 2, 1]));