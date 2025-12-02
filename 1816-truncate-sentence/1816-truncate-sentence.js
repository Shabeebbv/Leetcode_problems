/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let x=s.split(' ').slice(0,k).join(' ')
    return x
    
};
console.log(truncateSentence("Hello how are you Contestant",4));
