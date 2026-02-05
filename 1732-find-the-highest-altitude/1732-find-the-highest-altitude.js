/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max=0
    let sum=0
    for(i=0;i<gain.length;i++){
        sum+=gain[i]
        if(max<sum){
            max=sum
        }
    }
    return max
};