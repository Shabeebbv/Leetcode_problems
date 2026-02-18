var countConsistentStrings = function(allowed, words) {
    let count=0
    for(i=0;i<words.length;i++){
        let istrue=true
        for(j=0;j<words[i].length;j++){
            if(!allowed.includes(words[i][j])){
                istrue=false
                break
            }
        }
        if (istrue==true){
            count++
        }
    }
    return count
};
console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));
