/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    if(num==0){return true}
    x=String(num).split('').at(-1)
    if(x==0){
        return false
    }
    else{
        return true
    }
};
console.log(isSameAfterReversals(526));
