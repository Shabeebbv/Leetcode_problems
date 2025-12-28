/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let U=0;
    let D=0
    let L=0;
    let R=0
    for(i=0;i<moves.length;i++){
        if(moves[i]=='U'){
            U++
        }
        else if(moves[i]=='D'){
            D++
        }
        else if(moves[i]=='L'){
            L++
        }
        else{
            R++
        }

    }
    if(R==L&&U==D){
        return true
    }
    else{
        return false
    }
};
console.log(judgeCircle('LL'));
