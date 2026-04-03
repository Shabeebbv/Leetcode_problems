/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    x=[]
    for(i=0;i<arr.length;i++){
        max=-1
        for(j=i+1;j<arr.length;j++){
            if(arr[j]>max){
               max=arr[j]
            }
        }
        x.push(max)
    }
    return x
};
console.log(replaceElements([17,18,5,4,6,1]));
