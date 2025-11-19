var minMovesToSeat = function(seats, students) {
    count=0
    let sseat=seats.sort((a,b)=>a-b)
    let sstdnt=students.sort((a,b)=>a-b)
    for(i=0;i<seats.length;i++){
            if(seats[i]!=students[i]){
                let diff=Math.abs(seats[i]-students[i])
                console.log(diff);
                
                count+=diff
            }
    }
    return count
    
    
};
console.log(minMovesToSeat([4,1,5,9],[1,3,4]));
