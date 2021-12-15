// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// const swap = (arr, a, b) => {
//     const temp = arr[a]
//     arr[a] = arr[b]
//     arr[b] = temp
// }

// const partition = (arr, start, end) => {
//     const povit = arr[end]
//     let left = start
//     for (let index = left; index < end; index++) {
//         if (arr[index] <= povit) {
//             swap(arr, index, left++)
//         }
//     }
//     return left
// }

// const getMaxK = (arr, start, end, targetIndex) => {
//     const randomIndex = start + Math.floor(Math.random() * (end - start + 1))
//     swap(arr, randomIndex, end)
//     const curIndex = partition(arr, start, end)
//     swap(arr, curIndex, end)
//     if (curIndex === targetIndex) return arr[curIndex]
//     return curIndex > targetIndex ? getMaxK(arr, start, curIndex - 1, targetIndex) : getMaxK(arr, curIndex + 1, end, targetIndex)
// }

// var findKthLargest = function (nums, k) {
//     return getMaxK(nums, 0, nums.length - 1, nums.length - k)
// };


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

const heapify = (arr, index) => {
    const left = index * 2 + 1
    const right = left + 1
    let min = index
    if (arr[left] < arr[min]) min = left
    if (arr[right] < arr[min]) min = right
    if (min !== index) {
        swap(arr, min, index)
        heapify(arr, min)
    }
}

const upHeapify = (arr, end) => {
    const parent = Math.floor(end / 2) - 1
    const left = parent * 2 + 1
    const right = left + 1
    let min = parent
    if (arr[left] < arr[min]) min = left
    if (arr[right] < arr[min]) min = right
    if (min !== parent) {
        swap(arr, min, parent)
        upHeapify(arr, parent + 1)
    }
}


var findKthLargest = function (nums, k) {
    const heap = []
    for (let index = 0; index < nums.length; index++) {
        const ele = nums[index];
        if (heap.length < k) {
            heap.push(ele)
            upHeapify(heap, heap.length)
        } else if (heap[0] < ele) {
            heap[0] = ele
            heapify(heap, 0)
        }
    }
    return heap[0]
};