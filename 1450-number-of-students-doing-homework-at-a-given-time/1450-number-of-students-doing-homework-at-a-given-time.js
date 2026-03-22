var busyStudent = function(startTime, endTime, queryTime) {
    let count=0
    // let arr=[...startTime,...endTime]
    for(i=0;i<startTime.length;i++){
        for(j=startTime[i];j<=endTime[i];j++){
            if(j==queryTime){
                count++
            }
        }
        
    }
    return count
};
console.log(busyStudent([1,2,3],[3,2,7],4));
