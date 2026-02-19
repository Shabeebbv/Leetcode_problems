var countSymmetricIntegers = function(low, high) {
    let count=0
    for(let i=low;i<=high;i++){
        let x=String(i)
        if(x.length%2==0){
            let z=x.length/2
            let left=x.slice(0,z)
            let right=x.slice(z)
            let sum1=0
            let sum2=0
            for(j=0;j<z;j++){
                sum1+=Number(left[j])
                sum2+=Number(right[j])
            }
                if(sum1==sum2){
                    count++
                }
        }
    }
    return count
};