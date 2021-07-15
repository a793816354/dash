/**
 * @param {number[]} nums
 * @return {number}
 */
// 慢，超时
// var findDuplicate = function(nums) {
//     return nums.find((item,index)=>{
//         return nums.some((innerItem,InnerIndex)=>{
//             return index!==InnerIndex&&item===innerItem
//         })
//     })
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
// 在所有 JavaScript 提交中击败了12.83%的用户
// var findDuplicate = function(nums) {
//     nums.sort((a,b)=>a-b)
//     for (let index = 0; index < nums.length; index++) {
//         if(nums[index]===nums[index+1]){
//             return nums[index]
//         }
//     }
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
// 在所有 JavaScript 提交中击败了40.49%的用户
// var findDuplicate = function(nums) {
//     const set = new Set()
//     for (let index = 0; index < nums.length; index++) {
//         const ele = nums[index]
//        if(set.has(ele)){
//         return ele
//        }
//         set.add(ele)
//     }
// };


/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

};
console.log(findDuplicate([3,1,3,4,2]));

