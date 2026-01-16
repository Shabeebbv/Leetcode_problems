/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    x=s.split('').sort().join('')
    y=t.split('').sort().join('')
    if(x==y){
        return true
    }
    else{
        return false
    }
};
console.log(isAnagram('anagram','nagaram'));
