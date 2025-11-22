/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
   let leftsum=0
   let total=0
    for(i=1;i<=n;i++){
        total+=i
        }
    for(i=1;i<=n;i++){
        leftsum+=i
        rightsum=(total-leftsum)+i
        if(leftsum==rightsum){
            return i
        }
    }
        return -1
};
console.log(pivotInteger(8));
