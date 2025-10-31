var lemonadeChange = function(bills) {
    let five=0
    let ten=0
    for(i=0;i<bills.length;i++){
        // for(j=0;j<res.length;j++){
        if(bills[i]==5){
            five++
        }
        else if(bills[i]==10){
            if(five<1)return false
           ten++
         
            five--
           
               
                // }   
    }
    else if(bills[i]==20){
        if(five>=1&&ten>=1){
            ten --
            five --
            // return true
        }
        else if(five>=3){
            five-=3
        }
        else{
            return false
        }
    }
}
    return true
};
console.log(lemonadeChange([5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5]));
