var numberGame = function(nums) {
    let newNum=nums.sort((a,b)=>a-b)
    let arr=[]
    for(i=0;i<nums.length;i+=2){
        // for(j=0;j<i;j+=2){
            arr.push(newNum[i+1],newNum[i])
            
        }
    // }

    return arr
};
console.log(numberGame([4,4,3,8]));
