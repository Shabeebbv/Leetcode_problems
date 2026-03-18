/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    x=target.sort((x,y)=>x-y)
    y=arr.sort((x,y)=>x-y)
    return x.join()==y.join()
};