
function sumFibs(num) {
  
  var a = 1;
  var b = 0;
  var temp;
  var sum = 0;
  
  while(a <= num){
    temp = a;
    a = a + b;
    b = temp;
    if(b % 2 === 1) {
      sum += b;
    } 
  }
  
  return sum;
}
