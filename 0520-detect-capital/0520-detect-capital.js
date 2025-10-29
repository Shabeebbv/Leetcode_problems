var detectCapitalUse = function(word) {
    let lower=word.toLowerCase()
    let cap=word.toUpperCase()
    let fst=word.charAt(0).toUpperCase() +  word.slice(1).toLowerCase()
    if(word===lower|| word ===cap||word ===fst){
        return true
    }
    else{
        return false
    }
};
console.log(detectCapitalUse('HelLlo'));
