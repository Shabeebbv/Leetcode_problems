var addTwoPromises = async function(promise1, promise2) {
    let v1=await promise1 ;
    let v2=await promise2;
    return v1+v2
}
addTwoPromises(2,5).then((res)=>{
    console.log(res);
    
})