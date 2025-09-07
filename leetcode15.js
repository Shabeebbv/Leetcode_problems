var filter = function(arr, fn) {
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            res.push(arr[i])
        }

        
    }
    return res
    
};
console.log(filter([1,2,4],fn = (n, i) => n % 2 === 0))