var isPowerOfThree = function(n) {
    let k=Math.pow(3,n)
    
// function fact(n){
//     if (n==0){
//         return 1
//     }
//     return n*fact(n)
// }

// if (k== fact()){
//     return true
// }
// else{
//     return false
// }

    // console.log(k)
    if (k%3==0 && n!=0){
        return true
    }
    // else if(n==0){
    //     return false
    // }
    else{
        return false
    }
    
};
// console.log(isPowerOfThree(6))


// function fact(num){
//     if (num==0){
//         return 1
//     }
//     return num*fact(num-1)
// }
// console.log(fact(5));
