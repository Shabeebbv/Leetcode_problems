var firstPalindrome = function(words) {
    for(i=0;i<words.length;i++){
        let rev=words[i].split('').reverse().join('')
        if(words[i]==rev){
            return words[i]
        }
    }
    return ''
};
console.log(firstPalindrome( ["abc","car","ada","racecar","cool"]));

