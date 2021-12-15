/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = []
    let result = ""
    for (let index = 0; index < s.length; index++) {
        if(s[index]===stack[stack.length-1]){
            stack.pop()
        }else{
            stack.push(s[index])
        }
    }
    while(stack.length){
       result = stack.pop()+result 
    }
    return result
};