var shuffle = function(nums, n) {
    let fst=[]
    let scd=[]
    let ans=[]
    for (i=0;i<nums.length;i++){
        if(i<n){
            fst.push(nums[i])
        }
        else{
            scd.push(nums[i])
        }
    }
    for(i=0;i<fst.length;i++){
            ans.push(fst[i])
            ans.push(scd[i])
    }
    return ans
    
};
console.log(shuffle([2,5,1,3,4,7], n = 3));
