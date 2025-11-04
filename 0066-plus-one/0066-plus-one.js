var plusOne = function(digits) {
   let ans=digits.join('')
   let nmbr=(BigInt(ans)+1n)
//    let add=nmbr+1
   let str=nmbr.toString()
   let arr=str.split('').map(Number)


   return arr

};
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
