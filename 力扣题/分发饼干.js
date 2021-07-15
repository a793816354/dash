/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)

    let childIndex = 0;
    let cookieIndex = 0;
    let result = 0

    while(childIndex<g.length&&cookieIndex<s.length){
        const child = g[childIndex]
        const cookie = s[cookieIndex]
        if(cookie>=child){
            childIndex++
            cookieIndex++
            result++
        }else{
            cookieIndex++
        }
    }
    return result
};