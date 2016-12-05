
function uniteUnique(arr) {
  
  var args = Array.from(arguments);
  var array = args.reduce(function(a,b) {
    return a.concat(b);
  });
  
  var newArr = [];
  for(var i = 0; i < array.length; i++) {
    if(newArr.includes(array[i]) === false) {
      newArr.push(array[i]);
    }
  }
  
  
  return newArr;
}
