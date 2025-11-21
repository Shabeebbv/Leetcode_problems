/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let arr=s.split('')
    let newarr=[...arr]
    for(i=0;i<arr.length;i++){
        newarr.splice(indices[i],1,arr[i])
    }
    return newarr.join('')     
};
console.log(restoreString('codeleet',[4,5,6,7,0,2,1,3]));
