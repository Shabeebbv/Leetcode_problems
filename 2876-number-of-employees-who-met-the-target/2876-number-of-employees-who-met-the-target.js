/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let hr=0
    for(i=0;i<hours.length;i++){
        if(target<=hours[i]){
            hr++
        }
    }
    return hr
};
console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4],2));
