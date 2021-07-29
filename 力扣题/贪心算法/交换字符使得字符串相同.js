/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */

const getCharNum = (s,char)=>{
    let value = 0
    for (let index = 0; index < s.length; index++) {
        if(char===s[index]){
            value++
        }
    }
    return value
}

var minimumSwap = function(s1, s2) {
    if(s1===s2) return 0

    const s1XValue = getCharNum(s1,'x')
    const s1YValue = getCharNum(s1,'y')
    const s2XValue = getCharNum(s2,'x')
    const s2YValue = getCharNum(s2,'y')

    if((s1XValue+s2XValue)%2===1||(s1YValue+s2YValue)%2===1){
        return -1
    }

    let formatS = ''
    for (let index = 0; index < s1.length; index++) {
        if(s1[index]!==s2[index]){
            formatS+=s1[index]
        }
    }
    
    let result = 0
    const xValue = getCharNum(formatS,'x')
    const yValue = getCharNum(formatS,'y')
    result = Math.floor(xValue/2)+Math.floor(yValue/2)
    
    if(xValue%2){
        result+=2
    }
    return result
};
console.log(minimumSwap('xxyyxyxyxx','xyyxyxxxyx'));