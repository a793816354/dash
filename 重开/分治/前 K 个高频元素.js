/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 输入: nums = [1, 1, 1, 2, 2, 3], k = 2
// 输出: [1, 2]
const swap = (arr, a, b) => {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
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

const heapify = (arr, index) => {
    const left = index * 2 + 1
    const right = left + 1
    let min = index
    if (arr[left] < arr[min]) min = left
    if (arr[right] < arr[min]) min = right
    if (min !== index) {
        swap(arr, min, index)
        upHeapify(arr, min)
    }
}

var topKFrequent = function (nums, k) {
    const map = {}
    for (let index = 0; index < nums.length; index++) {
        map[nums[index]] = (map[nums[index]] || 0) + 1
    }
    const reflectMap = {}
    for (const key in map) {
        reflectMap[map[key]] = key
    }

    const timeArr = Object.values(map)
    const heap = []
    for (let index = 0; index < timeArr.length; index++) {
        const ele = timeArr[index];
        if (heap.length < k) {
            heap.push(ele)
            upHeapify(heap, heap.length)
        } else if (heap[0] < ele) {
            heap[0] = ele
            heapify(heap, 0)
        }
    }
    const result = []
    console.log(map);
    console.log(heap);
    console.log(reflectMap);
    for (let index = 0; index < heap.length; index++) {
        result.push(reflectMap[heap[index]])
    }
    return result
};