/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const swap = (arr, a, b) => {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

const partition = (arr, start, end) => {
    let left = start
    const povit = arr[end]
    for (let index = start; index < end; index++) {
        if (arr[index] <= povit) {
            swap(arr, index, left++)
        }
    }
    return left
}

const quickSelect = (arr, start, end, targetIndex) => {
    const randomIndex = start + Math.floor(Math.random() * (end - start + 1))
    swap(arr, randomIndex, end)
    const curIndex = partition(arr, start, end)
    swap(arr, curIndex, end)
    if (curIndex === targetIndex) return arr[curIndex]
    return curIndex > targetIndex ? quickSelect(arr, start, curIndex - 1, targetIndex) : quickSelect(arr, curIndex + 1, end, targetIndex)
}

var findKthLargest = function (nums, k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k)
};