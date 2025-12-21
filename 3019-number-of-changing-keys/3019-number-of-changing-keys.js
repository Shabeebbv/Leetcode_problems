var countKeyChanges = function(s) {
    let count=0
    let up=s.toUpperCase()
    for(i=0;i<s.length;i++){
        if(up[i]!=up[i+1]){
            console.log(up[i]);
            console.log(up[i+1]);
            
            
            count++
        }

    }
    return count-1
};
console.log(countKeyChanges("aAbBcC"));
