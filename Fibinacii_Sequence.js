var x = 0;
var y = 1;
function Enumeration(){
  sequenceOfNumbers.push(x+y);
  y =x+y;
  x = y-x;
}
function Seq(x,y){

  sequenceOfNumbers = [];
  numbersInSequence = parseInt(prompt("How many terms would you like to be displayed of the Fibinacii Sequence"));
  for(i = 0; i < numbersInSequence; i++){
    i>1 ? Enumeration(x,y) : sequenceOfNumbers.push(i);
}
}
Seq(x,y);
alert(`The first ${numbersInSequence} numbers in the Fibinacii sequence are ${sequenceOfNumbers}`);
