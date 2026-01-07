/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count=0
    let x=0
    for(i=0;i<s.length;i++){
        if(s[i]=='R'){
            x++
            if (x==0){
                count++
            }
        }
        
        else{
            x--
            if (x==0){
                count++
            }
        }
    }
    return count
};
console.log(balancedStringSplit("LLLLRRRR"));
