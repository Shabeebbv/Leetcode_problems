var once = function(fn) {
    let called=false
    let res=0
    return function(...args){
        if(called==false){
           res= fn(...args) 
             called=true

           return res
            
        }
        else{
            return undefined
        }
        
        
    }
    
};
// console.log(once(fn(a + b + c), [[1,2,3],[2,3,6]]))