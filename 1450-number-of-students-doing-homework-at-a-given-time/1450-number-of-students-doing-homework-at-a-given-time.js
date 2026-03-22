var busyStudent = function(startTime, endTime, queryTime) {
    let count=0
    for(i=0;i<startTime.length;i++){
        for(j=startTime[i];j<=endTime[i];j++){
            if(j==queryTime){
                count++
            }
        }    
    }
    return count
}