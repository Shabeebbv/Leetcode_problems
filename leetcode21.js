var mergeTwoLists = function(list1, list2) {
   return list1.concat(list2).sort((a,b)=> a-b)
    
};
console.log(mergeTwoLists([1,5,4],[1,3,4]));

// wrong answer