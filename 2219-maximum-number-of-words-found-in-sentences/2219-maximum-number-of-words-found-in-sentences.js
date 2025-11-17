/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let count=0
    for(i=0;i<sentences.length;i++){
        let word=[sentences[i]].join('')
        let ans=word.split(' ')
        for(j=0;j<ans.length;j++){
            if(ans.length>count){
                count=ans.length
            }
        }        
    }
    return count
    
};
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
