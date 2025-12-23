var firstUniqChar = function(s) {
    for(i=0;i<s.length;i++){
        let x=true
        for(j=0;j<s.length;j++){
            if(s[i]==s[j] && i!=j){
                x=false
                break
        } 
        }
        if(x){
            return i
        }
    }
    return -1
};
console.log(firstUniqChar('"loveleetcode"'));
