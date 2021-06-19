/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
    let left = 0;
    let right = 2

    while(left<=right){
        const mid = left+Math.floor((right-left)/2)
        const curMidVal = reader.get(mid)
        if(curMidVal===target){
            return mid
        }else if(curMidVal<target){
            left = mid+1
            right*=2
        }else{
            right = mid-1
        }
    }
    return -1
};
console.log(search([-1,0,3,5,9,12], 9));
// 思路:1.不知道初始right，但right必须有，所以思路为right对乘
    // 2.升序数组，target好找