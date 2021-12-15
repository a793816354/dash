/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const result = []
    let targetIndex = 0
    for (let index = 1; index <= n&&targetIndex<target.length; index++) {
        if(target[targetIndex]===index){
            result.push("Push")
            targetIndex++
        }else{
            result.push("Push","Pop")
        }
    }
    return result
};
console.log(buildArray([1,3], 3));
console.log(buildArray([2,3,4],4));
console.log(buildArray([1,2], 4));