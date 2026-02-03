/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    let ans=tasks[0][0]+tasks[0][1]
    for(i=1;i<tasks.length;i++){
        for(j=0;j<tasks[i].length;j++){
            sum=tasks[i][j]+tasks[i][j+1]
            if(sum<ans){
                ans=sum
            }
        }
    }
    return ans
};
console.log(earliestTime([[1,6],[2,3]]));
