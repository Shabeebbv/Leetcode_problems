/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let arr=[num]
    let x=num.toString().split('')
    for(i=0;i<x.length;i++){
        let y=num.toString().split('')
        if(y[i]==9){
            y[i]=6
            arr.push(Number(y.join('')))
        }
        else{
            y[i]=9
            arr.push(Number(y.join('')))
        }
    }
    return Math.max(...arr)
};
console.log(maximum69Number(9669));
