/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj={}
    let frq=[]
    for(let i=0;i<arr.length;i++){        
        value=arr[i]
        if(obj[value]){
            obj[value]++
        }
        else{
            obj[value]=1
        }
    }
    for(let key in obj){
        frq.push(obj[key])
    }
    for(let i=0;i<frq.length;i++){
        for(let j=i+1;j<frq.length;j++){
            if(frq[i]==frq[j]){
                return false
            }
        }
        
    }return true
};
console.log(uniqueOccurrences([1,2,2,1,1,3]));

