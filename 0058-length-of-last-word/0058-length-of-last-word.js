/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res=s.trim().split(' ')
    for(i=res.length-1;i<=res.length-1;i++){
      var  ans=res[i].length
    }
    return ans
};
console.log(lengthOfLastWord('   hello world'));