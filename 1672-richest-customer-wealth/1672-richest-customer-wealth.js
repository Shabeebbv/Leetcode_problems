/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let arr=[]
    for(i=0;i<accounts.length;i++){
        let count=0
        for(j=0;j<accounts[i].length;j++){
            count+=accounts[i][j]
        }
        arr.push(count)
    }
    return Math.max(...arr)
};
console.log(maximumWealth([[1,2,3],[3,2,1]]));
