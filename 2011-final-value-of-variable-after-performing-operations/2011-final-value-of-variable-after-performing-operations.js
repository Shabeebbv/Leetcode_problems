var finalValueAfterOperations = function(operations) {
    let value=0
    for(i=0;i<operations.length;i++){
        if(operations[i]=='X++'|| operations[i]=='++X'){
            // console.log(operations[i]);
            
            value++
        }
        else{
            console.log(operations[i])
            value--
        }
    }
    return value
};
console.log(finalValueAfterOperations(["++X","++X","X++"]));
