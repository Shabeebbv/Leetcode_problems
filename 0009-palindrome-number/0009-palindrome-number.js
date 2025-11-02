/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let res=Number(x.toString().split('').reverse().join(''))
    
    if(res==x){
        return true
    }
    else{
        return false
    }
    return res
};
console.log(isPalindrome(121));
