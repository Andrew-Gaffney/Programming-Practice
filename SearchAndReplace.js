
function myReplace(str, before, after) {
  
  var newAfter = after;
  if(before[0] === before[0].toUpperCase()) {
    newAfter = after.replace(after[0], after[0].toUpperCase());
  }
  

  return str.replace(before, newAfter);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
