/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let count=0
    for(i=0;i<words.length;i++){
        let x=words[i].split('').reverse().join('')
        for(j=i+1;j<words.length;j++){
            if(x==words[j]){
                count+=1
                
            }
        }
    }
    return count
};
console.log(maximumNumberOfStringPairs( ["cd","ac","dc","ca","zz"]));
