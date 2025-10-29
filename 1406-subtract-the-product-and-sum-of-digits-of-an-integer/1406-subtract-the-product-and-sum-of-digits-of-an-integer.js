/**
 * @param {number} n
 * @return {number}
 */
  var subtractProductAndSum = function(n) {
    var add=0
    var pro=1
    var sub=0
     let res=n.toString().split('').map(Number)  
     for(i=0;i<res.length;i++){
        add=add+res[i]
        pro=pro*res[i]
        
     }
     sub=pro-add
     return sub
};
 
console.log(subtractProductAndSum(234));
