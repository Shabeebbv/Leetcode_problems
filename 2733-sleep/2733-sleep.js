async function sleep(millis) {
        return new Promise((resolve,reject)=>{
                setTimeout(()=>{

            // console.log(millis);
            resolve(millis)
            

        },millis)
    })
    
}
sleep(100).then((value)=>{
    console.log(value)
})

// sleep(200)