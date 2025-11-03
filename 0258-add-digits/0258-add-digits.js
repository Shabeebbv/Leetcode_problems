var addDigits = function(num) {
    let ans=0
    let res=num.toString().split('').map(Number)  
    for (i=0;i<res.length;i++)
    {
        ans=ans+res[i]
        if(ans.toString().length>=2){
           let x= ans.toString().split('').map(Number)  
            ans=x[1]+x[0]
        }
    }
    return ans
};
console.log(addDigits(38));
