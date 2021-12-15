/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const dfs= (nums,path,start,result)=>{
    result.push(path)
    for (let index = start; index < nums.length; index++) {
        if(index>start&&nums[index]===nums[index-1])continue
        dfs(nums,[...path,nums[index]],index+1,result)
    }
}

var subsets = function(nums) {
    const result = []
    nums.sort((a,b)=>a-b)
    dfs(nums,[],0,result)
    return result
};