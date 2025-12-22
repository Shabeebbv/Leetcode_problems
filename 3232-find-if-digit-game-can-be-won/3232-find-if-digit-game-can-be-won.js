var canAliceWin = function(nums) {
    let single=0
    let double=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]<10){
            single+=nums[i]
        }
        else{
            double+=nums[i]
        }
    }
    if(single==double){
        return false
    }
    else{
        return true
    }
};
console.log(canAliceWin([1,2,3,4,10]));
