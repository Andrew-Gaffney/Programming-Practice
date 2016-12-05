function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  function hyphenator(word){
    function hyphen(match) {
        return "-" + match.toLowerCase();
    }
    return word.replace(/\B[A-Z]/g, hyphen);
  }
  
  str = hyphenator(str);
  str = str.toLowerCase();
  str = str.replace(/ /g, "-");
  str = str.replace(/_/g, "");
  console.log(str);
  return str;
}
