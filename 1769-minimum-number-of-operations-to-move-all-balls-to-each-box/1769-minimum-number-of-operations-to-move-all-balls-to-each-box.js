/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let arr=[]
    for(i=0;i<boxes.length;i++){
        let count=0
        for(j=0;j<boxes.length;j++){
            if(boxes[j]>0 && j!=i){
                count+=Math.abs(i-j)
            }
        }
        arr.push(count)
    }
    return arr
};
