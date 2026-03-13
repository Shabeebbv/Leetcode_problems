/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    let vowels='aeiou'
    for(i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            return true
        }
    }
    return false
};
console.log(doesAliceWin("leetcoder"));
