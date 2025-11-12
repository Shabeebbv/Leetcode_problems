/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count=0
    let arr=[num].join('').split('').map(Number)
    for(i=0;i<=arr.length;i++){
        if(num%arr[i]==0){
            count++
        }
    }
    return count
};
console.log(countDigits(121));
