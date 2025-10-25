function add(a,b){
    return a+b
}
function fibnocci(n){
    if(n==0) return 0
    if(n==1) return 1
    return fibnocci(n-1)+fibnocci(n-2)
    
}
function factorial(n){
    if(n==0||n==1){
        return 1
    }
    else{
        return n*factorial(n-1)
    }
}
function memoize(fn) {
    let cache={}
    // if(cache==)
    
    return function(...args) {
        const key=args.toString()
        if(key in cache){
            return cache[key]
        }
        const res=fn(...args)
        cache[key]=res
        return res


        
    }
}
    const sum=memoize(add)
    const fib=memoize(fibnocci)
    const fact=memoize(factorial)
console.log(sum(2,3))