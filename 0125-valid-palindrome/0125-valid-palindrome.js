var isPalindrome = function(s) {
    let clean=s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    let dup=clean.split('').reverse().join('')
    if(clean==dup){
        return true
    }
    else{
        return false
    }
    // return clean
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));

