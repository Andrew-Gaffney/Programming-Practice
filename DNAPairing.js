
function pairElement(str) {
  
  var pairs = [];
  var newStr = str.split("");
  
  for(var i = 0; i < newStr.length; i++) {
    var pair = [];
    switch(newStr[i]) {
      case "G":
        pair.push("G");
        pair.push("C");
        pairs.push(pair);
        break;
      case "C":
        pair.push("C");
        pair.push("G");
        pairs.push(pair);
        break;
      case "A":
        pair.push("A");
        pair.push("T");
        pairs.push(pair);
        break;
      case "T":
        pair.push("T");
        pair.push("A");
        pairs.push(pair);
        break;
    }
        
  }
  
  return pairs;
}

pairElement("GCG");
