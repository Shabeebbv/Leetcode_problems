var cancellable = function(fn, args, t) {
    
   let timer= setTimeout(()=>{
        fn(...args)

    },t)

    const clear=()=>clearTimeout(timer)

    // setTimeout(clear,50)
    return clear
    
};