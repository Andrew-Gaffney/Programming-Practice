
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
    var names = Object.keys(source);
    var truth = false;
    for(var i = 0; i < collection.length;  i++) {
      for(var j = 0; j < names.length; j ++) {
        truth = (collection[i][names[j]] === source[names[j]]);
      }
      if(truth) {
        arr.push(collection[i]);
      }
    }
  
  // Only change code above this line
  return arr;
}
