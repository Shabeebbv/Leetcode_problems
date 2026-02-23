var maxFreqSum = function(s) {
    let vowels='aeiou'
    let vobj={}
    let obj={}
    for(i=0;i<s.length;i++){
        let ch = s[i]
        if(vowels.includes(s[i])){
            vobj[ch]=(vobj[ch]||0)+1
        }
        else{
            obj[ch]=(obj[ch]||0)+1
        }
    }
    let maxv=0
    for(key in vobj){
        if(vobj[key]>maxv){
            maxv=vobj[key]
        }

    }
    let maxc=0
        for(key in obj){
        if(obj[key]>maxc){
            maxc=obj[key]
        }  
    }
    return maxv+maxc

};
console.log(maxFreqSum("successes"));
