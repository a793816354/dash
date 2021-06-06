/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const sObj = {}
    const tObj = {}

    for (let index = 0; index < s.length; index++) {
        const sVal = s[index]
        const tVal = t[index]
        
        if(tObj[tVal]){
            if(tObj[tVal]!==sVal){
                return false
            }
        }else{
            tObj[tVal] = sVal
        }
        
        if(sObj[sVal]){
            if(sObj[sVal]!==tVal){
                return false
            }
        }else{tVal
            sObj[sVal] = tVal
        }

    }
    return true
};
console.log(isIsomorphic("paper"
,"title"));
console.log(isIsomorphic("badc"
,"baba"));
console.log(isIsomorphic("foo"
,"bar"));