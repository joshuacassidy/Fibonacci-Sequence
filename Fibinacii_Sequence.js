(function (x,y){

  function Enumeration(){
    sequenceOfNumbers.push(x+y);
    y =x+y;
    x = y-x;
  }

  var sequenceOfNumbers = [];
  var numbersInSequence = parseInt(prompt("How many terms would you like to be displayed of the Fibinacii Sequence"));
  for(i = 0; i < numbersInSequence; i++){
    i>1 ? Enumeration(x,y) : sequenceOfNumbers.push(i);
  }
  alert(`The first ${numbersInSequence} terms in the Fibinacii sequence are ${sequenceOfNumbers}`);
})(0,1);
