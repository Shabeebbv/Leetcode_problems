/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let obj={}
    for(i=0;i<s.length;i++){
        x=s[i]
        if(obj[x]){
            obj[x]++
        }
        else{
            obj[x]=1
        }
    }
    let values=Object.values(obj)
    let first=values[0]
    for(i=0;i<values.length;i++){
        if (first != values[i]){
            return false
        }
    }
    return true
};