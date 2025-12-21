var countKeyChanges = function(s) {
    let count=-1
    let up=s.toUpperCase()
    for(i=0;i<s.length;i++){
        if(up[i]!=up[i+1]){
            count++
        }
    }
    return count
};
console.log(countKeyChanges("aAbBcC"));
