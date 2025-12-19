var maxProfit = function(prices) {
let min=prices[0]
let profit=[0]
for(i=1;i<prices.length;i++){
    if(prices[i]<min){
        min=prices[i]
    }
    else{
        profit.push(prices[i]-min)
    }
}
return Math.max(...profit)
}
console.log(maxProfit([7,1,5,3,6,4]
))