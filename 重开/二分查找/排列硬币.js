/**
 * @param {number} n
 * @return {number}
 */
// const getSum = (num) => {
//     return (1 + num) * num / 2
// }
// console.log(getSum(3));
// var arrangeCoins = function (n) {
//     if (n === 1) return 1
//     let left = 1
//     let right = n
//     while (left < right) {
//         const mid = left + Math.floor((right - left) / 2)
//         const sum = getSum(mid)
//         if (sum === n) {
//             return mid
//         } else if (sum < n) {
//             left = mid + 1
//         } else {
//             right = mid
//         }
//     }
//     return left - 1
// };


/**
 * @param {number} n
 * @return {number}
 */
const getSum = (num) => {
    return (1 + num) * num / 2
}
var arrangeCoins = function (n) {
    let left = 1
    let right = n
    while (left < right) {
        const mid = left + Math.ceil((right - left) / 2)
        if (getSum(mid) <= n) {
            left = mid
        } else {
            right = mid - 1
        }
    }
    return left
};
console.log(arrangeCoins(5));