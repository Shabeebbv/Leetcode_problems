/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let arr=[]
    let newArr=grid.flat().sort((x,y)=>x-y)    
    for(i=0;i<newArr.length-1;i++){
        if(newArr[i]===newArr[i+1]){
            arr.push(newArr[i])
        }
    }
    for(i=1;i<=newArr.length;i++){
        if(!newArr.includes(i)){
            arr.push(i)
        }
    }
    return arr
};
console.log(findMissingAndRepeatedValues([[1,3],[2,2]]));