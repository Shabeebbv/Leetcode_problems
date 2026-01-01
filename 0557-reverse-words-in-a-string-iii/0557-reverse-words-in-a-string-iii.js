/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let x=[]
    let arr=s.split(' ')
    for(i=0;i<arr.length;i++){
        let y=arr[i].split('').reverse().join('')
        x.push(y)    
    }
    return x.join(' ')
};
console.log(reverseWords("Let's take LeetCode contest"));
