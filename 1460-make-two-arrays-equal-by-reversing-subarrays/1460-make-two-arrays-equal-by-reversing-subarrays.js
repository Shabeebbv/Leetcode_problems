/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let x=target.sort((x,y)=>x-y)
    let y=arr.sort((x,y)=>x-y)
    return x.join()==y.join()
};