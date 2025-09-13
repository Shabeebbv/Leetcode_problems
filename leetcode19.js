

var createCounter = function(init) {
    let x=init

    return {
        increment:function(){
           return ++init
        },
        decrement:function(){
           return --init
        },
        reset:function(){
            init=x
           return init
        }
    }


};
const counter=createCounter(5)
console.log(counter.reset())