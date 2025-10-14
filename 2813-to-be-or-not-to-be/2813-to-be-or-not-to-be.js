var expect = function(val) {
    return{
        toBe:function(num){
            if(num===val){
                return true
            }
            else{
                throw new Error ('Not Equal')
            }
        },
        notToBe:function(nums){
            if(nums!==val){
                return true
            }
            else{
                throw new Error ('Equal')
            }
        }
    }
}
console.log(expect(5).notToBe(null))