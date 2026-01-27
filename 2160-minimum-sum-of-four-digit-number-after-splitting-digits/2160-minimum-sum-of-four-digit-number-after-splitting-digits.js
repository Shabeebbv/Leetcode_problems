/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let x=[num].join('').split('').map(Number).sort((x,y)=>x-y)
    num1=Number([x[0],x.at(-1)].join(''))
    num2=Number([x[1],x.at(-2)].join(''))
    return num1+num2    
};
console.log(minimumSum(2932));
