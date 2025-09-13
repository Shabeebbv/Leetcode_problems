var isEmpty = function(obj) {
    // for(let i=0;i<obj.length;i++)
        if(Object.keys(obj).length==0){
            return true
        }
        else{
            return false
        }
        
    
};
console.log(isEmpty([5]))