function translatePigLatin(str) {
  function findFirstVowel (string) {
    var firstVowel = Infinity;
    if(string.indexOf("a") < firstVowel && string.indexOf("a") > -1){
      firstVowel = string.indexOf("a");
    }
    if(string.indexOf("e") < firstVowel && string.indexOf("e") > -1){
      firstVowel = string.indexOf("e");
    }
    if(string.indexOf("i") < firstVowel && string.indexOf("i") > -1) {
      firstVowel = string.indexOf("i");
    }
    if(string.indexOf("o") < firstVowel && string.indexOf("o") > -1) {
      firstVowel = string.indexOf("o");
    }
    if(string.indexOf("u") < firstVowel && string.indexOf("u") > -1) {
      firstVowel = string.indexOf("u");
    }
    return firstVowel;
  }
  

  if(findFirstVowel(str) === 0) {
    return str + "way";
  }
  else {
    var newStr = str.substr(findFirstVowel(str), str.length);
    return newStr + str.substr(0, findFirstVowel(str)) + "ay";
  }
  
}

translatePigLatin("consonant");
