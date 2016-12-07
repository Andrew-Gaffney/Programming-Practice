
function sumPrimes(num) {
  
  var sum = 0;
  function isPrime(int) {
    var i = 2;
    if(num === 2)
      return true;
    while(i <= Math.sqrt(int)){
      if(int % i === 0)
        return false;
      i++;
    }
    return true;
  }
  var test = 2;
  while(test <= num){
    if(isPrime(test))
      sum+=test;
    test++;
  }
  
  return sum;
}
