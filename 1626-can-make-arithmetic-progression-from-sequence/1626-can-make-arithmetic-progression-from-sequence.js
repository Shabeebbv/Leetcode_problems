/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let srt=arr.sort((a,b)=>a-b)
    // console.log(srt);
    
    for(i=0;i<arr.length-2;i++){
        let diff1=srt[i+1]-srt[i]
        let diff2=srt[i+2]-srt[i+1]
 
        
        if(diff1!=diff2){
            return false
        }

    }
    return true
};
console.log(canMakeArithmeticProgression([3,5,1]));
