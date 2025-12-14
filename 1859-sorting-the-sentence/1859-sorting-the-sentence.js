/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let x=s.split(' ')
    let arr=[]
    for(i=0;i<x.length;i++){
      let index=x[i].at(-1)-1
      arr[index]=x[i].slice(0,-1)
    }
    return arr.join(' ')
    
};
console.log(sortSentence("is2 sentence4 This1 a3"));
