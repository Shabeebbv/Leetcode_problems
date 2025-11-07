var maxProduct = function(nums) {
    let srt=nums.sort((a,b)=>b-a)
  
    let res=[]
    for(i=0;i<nums.length;i++){
        if(i<2){
            res.push(srt[i])
        }
      
    } 
   return (res[0]-1)*(res[1]-1)
   
};
console.log(maxProduct([10,2,5,2]));
