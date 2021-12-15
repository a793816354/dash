// /**
//  * @param {number[]} arr
//  * @param {number} k
//  * @return {number[]}
//  */
// const swap = (arr, a, b) => {
//     const temp = arr[a]
//     arr[a] = arr[b]
//     arr[b] = temp
// }

// const upHeapify = (heap, end) => {
//     const parent = Math.floor(end / 2) - 1
//     const left = parent * 2 + 1
//     const right = left + 1
//     let max = parent
//     if (heap[left] > heap[max]) max = left
//     if (heap[right] > heap[max]) max = right
//     if (max !== parent) {
//         swap(heap, parent, max)
//         upHeapify(heap, parent + 1)
//     }
// }

// const heapify = (heap, index) => {
//     const left = index * 2 + 1
//     const right = left + 1
//     let max = index
//     if (heap[left] > heap[max]) max = left
//     if (heap[right] > heap[max]) max = right
//     if (max !== index) {
//         swap(heap, index, max)
//         heapify(heap, max)
//     }
// }

// var smallestK = function (arr, k) {
//     const heap = []
//     for (let index = 0; index < arr.length; index++) {
//         const ele = arr[index];
//         if (heap.length < k) {
//             heap.push(ele)
//             upHeapify(heap, heap.length)
//         } else if (heap[0] > ele) {
//             heap[0] = ele
//             heapify(heap, 0)
//         }

//     }
//     return heap
// };


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const swap = (arr, a, b) => {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

const partition = (arr, start, end) => {
    const povit = arr[end]
    let left = start
    for (let index = start; index < end; index++) {
        if (arr[index] <= povit) {
            swap(arr, index, left++)
        }
    }
    return left
}

const getMinKVal = (arr, targetIndex, start, end) => {
    const randomIndex = start + Math.floor(Math.random() * (end - start + 1))
    swap(arr, randomIndex, end)
    const curIndex = partition(arr, start, end)
    swap(arr, curIndex, end)
    if (curIndex === targetIndex) return arr[curIndex]
    return curIndex > targetIndex ? getMinKVal(arr, targetIndex, start, curIndex - 1) : getMinKVal(arr, targetIndex, curIndex + 1, end)
}

var smallestK = function (arr, k) {
    const result = []
    for (let index = 0; index < k; index++) {
        result.push(getMinKVal(arr, index, 0, arr.length - 1))
    }
    return result
};