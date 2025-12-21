var countKeyChanges = function(s) {
    let count=0
    let up=s.toUpperCase()
    for(i=0;i<s.length-1;i++){
        if(up[i]!=up[i+1]){
            console.log(up[i]);
            console.log(up[i+1]);
            
            
            count++
        }

    }
    return count
};
console.log(countKeyChanges("aAbBcC"));
