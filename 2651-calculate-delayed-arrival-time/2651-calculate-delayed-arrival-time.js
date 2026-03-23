/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    let total=arrivalTime+delayedTime
    if(total>=24){
        return total-24
    }
    else{
        return total
    }
    
};