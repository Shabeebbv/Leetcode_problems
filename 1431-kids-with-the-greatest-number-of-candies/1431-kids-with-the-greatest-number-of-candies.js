/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let arr=[]
    let mx=Math.max(...candies)
    for(i=0;i<candies.length;i++){
        if (candies[i]+extraCandies>=mx){
            arr.push(true)
        }
        else{
            arr.push(false)
        }
    }
    return arr
};
console.log(kidsWithCandies([2,3,5,1,3],3));


