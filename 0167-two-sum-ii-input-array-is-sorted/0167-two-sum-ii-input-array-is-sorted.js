/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let arr=[]
    for(let i=0;i<numbers.length;i++){
      for(let j=i+1;j<numbers.length;j++){
        if(numbers[i]+numbers[j]==target){
          arr.push(i+1,j+1)
          return arr
        }
      }
    }
};
console.log(twoSum([2,7,11,15],9));
