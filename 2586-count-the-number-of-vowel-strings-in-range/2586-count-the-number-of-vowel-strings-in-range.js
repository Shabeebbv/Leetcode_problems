/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let count=0
    let vowels='aeiou'
    for(let i=left;i<=right;i++){   
        x=words[i].length-1 
        if(vowels.includes(words[i][0]) && vowels.includes(words[i][x])){
            count++
        }
    }
    return count
};
console.log(vowelStrings(["hey","aeo","mu","ooo","artro"],1,4));
