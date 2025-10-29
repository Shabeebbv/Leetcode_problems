/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res=s.trim().split(' ')
    // let num=res.length-1
    // let ans=num.length
    for(i=res.length-1;i<=res.length-1;i++){
      var  ans=res[i].length
    }
    return ans
};
console.log(lengthOfLastWord('   hello world'));
