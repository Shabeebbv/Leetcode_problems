/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count=0
    let srt=heights.toSorted((x,y)=>x-y)    
    for(i=0;i<heights.length;i++){
        if(heights[i]!=srt[i]){
            count++
        }
    }
    return count
};