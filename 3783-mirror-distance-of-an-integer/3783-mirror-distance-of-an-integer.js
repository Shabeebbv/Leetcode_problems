/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let x=Number([n].join('').split('').reverse().join(''))
    return Math.abs(x-n)
};
console.log(mirrorDistance(25));

