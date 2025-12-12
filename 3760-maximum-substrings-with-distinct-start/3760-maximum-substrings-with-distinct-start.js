/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let x=[...s]
    let arr=[]
    for(i=0;i<s.length;i++){
            if(!arr.includes(x[i])){
                arr.push(x[i])
        }
    }
    return arr.length
};
console.log(maxDistinct('abab'));
