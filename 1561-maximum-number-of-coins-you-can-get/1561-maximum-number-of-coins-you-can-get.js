var maxCoins = function(piles) {
    let sum=0
    let count=piles.length/3
    let x=count
    let srt=piles.sort((x,y)=>x-y)
    for(i=0;i<piles.length;i++){
      if(i>=count && count>0){
        sum+=srt[x]
        x+=2
        count--
      }
    }
    return sum
};
