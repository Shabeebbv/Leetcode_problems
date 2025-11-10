var majorityElement = function(nums) {
    let arr=[]
    let n=nums.length
    let count={}
    for(i=0;i<nums.length;i++){
        let value=nums[i]
        if(count[value]){
            count[value]++
        }
        else{
            count[value]=1
        }
        // var max=Math.max(count[value])
    }
    // let max=Object.values(count)>n/3
    for(let key in count){
        if(count[key]>n/3){
         arr.push(key)
        }
    }
    // if(n/3)
    return arr.map(Number)
};
console.log(majorityElement([3,2,2,2,3]));
