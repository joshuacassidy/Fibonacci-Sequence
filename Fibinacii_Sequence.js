var x = 0;
var y = 1;
function seq(x,y){

  sequenceOfNumbers = [];
  numbersInSequence = parseInt(prompt("How many terms would you like to be displayed of the Fibinacii Sequence"));
  for(i = 0; i < numbersInSequence; i++){
    if(i>1){
      sequenceOfNumbers.push(x+y);
      y =x+y;
      x = y-x;
    }
    else{
      sequenceOfNumbers.push(i);
    }
}
}
seq(x,y);
alert(`The first ${numbersInSequence} numbers in the Fibinacii sequence are ${sequenceOfNumbers}`);
