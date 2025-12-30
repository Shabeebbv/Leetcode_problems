/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let arr=[]
    for(i=0;i<command.length;i++){
            if(command[i]=='('&&command[i+1]==')'){
                arr.push('o')
                i++
            }
            else if(command[i]=='('&&command[i+1]=='a'){
                arr.push('al')
                i=i+3
            }
            else{
                arr.push(command[i])
            }
        }
        return arr.join('')    
};
console.log(interpret("G()()()()(al)"));
