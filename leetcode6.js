// var maxProfit = function(prices) {
//     var mn=Math.min(...prices)
//     console.log(mn);
    
//     var mx= Math.max(...prices)
//     console.log(mx);
//      if (prices.indexOf(mx)>prices.indexOf(mn)){
//         return mx-mn
//      }
//      else if(ma){
//         return 0
//      }
    
// };
// console.log(maxProfit([7,1,5,3,6,4]))
// maxProfit([7,1,4,3,8])
   






// var maxProfit = function(prices) {
    // let min=Math.min(...prices)
    // let x=prices.indexOf(min)
    // // console.log(x);
    // let res=prices.slice(x)
    // // console.log(res);
    // let mx=Math.max(...res)
    // // console.log(mx);
    
    // for (i=0;i<prices.length;i++){
    //     console.log(prices[i]);
        
    //     if(prices[-1]>prices[i]){
    //         console.log(prices[i-1]);
            
    //         //  return 0
    //     }
    //     else{
    //         return mx-min
    //     }
                
    //     }
        
    // }

// console.log(maxProfit([2,4,1]))






// var maxProfit = function(prices) {
//     for (i=0;i<prices.length;i++){
//         for (j=i+1;j<prices.length;j++){
//             if(prices[i]>prices[j])
//                 return 0
            
//             else if(prices[i]>prices[j]){

//             }
//         }
//     }

// }
// console.log(maxProfit([7,1,5,3,6,4]))





// var maxProfit = function(prices) {
//     let min=prices[0]
//     // console.log(min);
    
//     for(i=0;i<prices.length;i++){
//         if (prices[i]<min){
//              min=prices[i]
            
//         }
        
//     //     for (j=0;j<prices.length;j++){
//     //    console.log(Math.max(prices[j]-min))
//     // }
//         // console.log(min);
        
//     }
//                         //  console.log(min);
// return min
// }

// console.log(maxProfit([2,4,1]))



var min=0
var max=0
var maxProfit = function(prices) {
for (let i=0;i<prices.length;i++){
    for(let j=i+1;j<prices.length;j++){
        if(prices[i]>prices[j] ){
             min+=prices[j]
             return min   
            // console.log(prices.indexOf(min));
                     
        }
         if(prices[i]>prices[j] && prices.indexOf(min)> j ){
           
         
            max+=prices[i]
            // console.log(prices[[i]]);
            
            return max
            
         }
    
    }
    
}
    
};

(maxProfit([7,1,5,3,6,4]))
console.log(min);
console.log(max);
// console.log(pric)
