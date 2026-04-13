/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    let res=[]
    // let max=[]
    for(i=0;i<matrix.length;i++){
        minval=Math.min(...matrix[i])
        colindx=matrix[i].indexOf(minval)
        let ismax=true
        for(let r=0;r<matrix.length;r++){
            if(matrix[r][colindx]>minval){
                ismax=false
                break;
            }
        }
        if(ismax){res.push(minval)}
    }
   return res
};
console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));
