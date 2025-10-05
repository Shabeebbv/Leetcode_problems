var differenceOfSums = function(n, m) {

    if(n<1){
        return 0
    }
    if(n%m===0)  {
        // console.log(n);
        
        // console.log(num1);
        return -n + differenceOfSums(n-1,m)
       
    } 
    else{
        return n+ differenceOfSums(n-1,m)
    }
    
    
};

 console.log(
  differenceOfSums(10,3))