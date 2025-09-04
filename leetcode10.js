var intersection = function(nums1, nums2) {
    let sett1=new Set(nums1)
    let sett12=Array.from(sett1)
    // console.log(sett12);
    let sett2=new Set(nums2)
    let sett22=Array.from(sett2)
    // console.log(sett22);
    let conct=sett12.concat(sett22)
    // console.log(conct);
    let fnl=conct.filter((a)=>conct.indexOf(a)!=conct.lastIndexOf(a))
    // console.log(fnl);
    let fnll=new Set(fnl)
    let fnlll=Array.from(fnll)
    return fnlll
    
};
console.log(intersection([1,2,2,1],[2,2]))