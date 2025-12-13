/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  let x='abcdefghijklmnopqrstuvwxyz'
  for(i=0;i<x.length;i++){
    // for(j=0;j<x.length;j++){
        if(!sentence.includes(x[i])){
            return false
        }
    // }
  }
  return true
};
console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
