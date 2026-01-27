var alternateDigitSum = function(n) {
    let sum=0
    let num=[n].join('').split('').map(Number)    
    for(i=0;i<num.length;i++){
        if(i%2==0){
            sum+=num[i]
        }
        else{
            sum-=num[i]
        }
    }
    return sum    
};
console.log(alternateDigitSum(521));
