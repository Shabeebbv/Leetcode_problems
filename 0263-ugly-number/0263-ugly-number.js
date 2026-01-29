var isUgly = function(n) {
    if (n<=0){
        return false
    }
    let x=n
    while(x%2==0){
         x=x/2
    }
    while (x%3==0){
       x=x/3
    }
    while (x%5==0){
       x=x/5
    }
    if(x==1){
        return true
    }
    else{
        return false
    }
};
console.log(isUgly(14));