/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let se1=s1.split(' ')
    let se2=s2.split(' ')
    let sentance=[...se1,...se2]
    let obj={}
    let arr=[]
    for(i=0;i<sentance.length;i++){
        value=sentance[i]
        if(obj[value]){
            obj[value]++
        }
        else{
            obj[value]=1
        }
    }
    for (let key in obj ){
        if (obj[key]==1){
            arr.push(key)
        }
    }  
    return arr
};
console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
