/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let sum=0
    let count=piles.length/3
    let x=count
    console.log(count);
    
    let srt=piles.sort((x,y)=>x-y)
    console.log(srt);
    
    for(i=0;i<piles.length;i++){
      if(i>=count && count>0){
        sum+=srt[x]
        x+=2
        count--
      }
    }
    return sum
};
console.log(maxCoins([9,8,7,6,5,1,2,3,4]));
