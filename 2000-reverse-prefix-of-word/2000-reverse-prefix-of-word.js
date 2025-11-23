var reversePrefix = function(word, ch) {
    let x=[]
    let y
    
    for(i=0;i<word.length;i++){
        console.log(word[i]);
        // x.push(word[i])
        if(word[i]!=ch){
            x.push(word[i])
        }
        else{
            y=word.slice(i+1)
            break;
            
        }
        
    }
    // console.log(y);
    if(word.includes(ch)){
    x.push(ch)
    return x.reverse().join('')+y}
    else{
        return word
    }
};
console.log(reversePrefix("abcd","d"));
