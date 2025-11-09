var romanToInt = function(s) {
    let count=0
    let roman={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    // let[I,V,X,L,C,D]=[1,5,10,50,100,500,1000]
    // console.log(D);
    for(let i=0;i<s.length;i++){
        if(roman[s[i]]<roman[s[i+1]]){
             count=count-roman[s[i]]
        }
        else{
            count=count+roman[s[i]]

        }
       
    }
     return count
};
console.log(romanToInt("MCMXCIV"));
