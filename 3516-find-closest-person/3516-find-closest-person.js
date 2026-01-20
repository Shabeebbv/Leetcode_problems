/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let a=Math.abs(x-z)
    let b=Math.abs(y-z)
    if(a<b){
        return 1
    }
    else if(a>b){
        return 2
    }
    else{
        return 0
    }   
};
console.log(findClosest(2,5,6));
