/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let arr=[]
    for(i=0;i<prices.length;i++){
        for(j=i+1;j<prices.length;j++){
            if(prices[i]>=prices[j]){
                arr.push(prices[i]-prices[j])
                console.log(arr);
                
                break;
            }
        }
        if(arr.length<=i){
            arr.push(prices[i])
        }
    }
    return arr
};
console.log(finalPrices([8,4,6,2,3]));
