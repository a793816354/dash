// /**
//  * @param {character[]} letters
//  * @param {character} target
//  * @return {character}
//  */
// var nextGreatestLetter = function (letters, target) {
//     const start = "a".charCodeAt(0)
//     const arr = []
//     for (let index = 0; index < letters.length; index++) {
//         arr[letters[index].charCodeAt(0) - start] = true
//     }
//     const targetIndex = target.charCodeAt(0) - start
//     for (let index = targetIndex + 1; index < arr.length; index++) {
//         if (arr[index]) {
//             return String.fromCharCode((index + start))
//         }
//     }
//     return letters[0]
// };


/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// 二分
var nextGreatestLetter = function (letters, target) {
    let left = 0
    let right = letters.length
    const targetCode = target.charCodeAt(0)
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (letters[mid].charCodeAt(0) <= targetCode) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return letters[left] || letters[0]
};
console.log(nextGreatestLetter(["c", "f", "j"], "a"));
console.log(nextGreatestLetter(["c", "f", "j"], "j"));