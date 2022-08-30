
//function for pushing buttons value in input tag
let display = (val) => {
  document.getElementById('result-display').value += val;
  return val;
}
// function for evaluation of input values
let solve = () => {
  let x = document.getElementById('result-display').value;
  let y = eval(x);
  document.getElementById('result-display').value = y;
  return y;
}
//function for dividing 1 by input value
function divideByOne() {
  return document.getElementById('result-display').value =  1/document.getElementById('result-display').value;
}

//function for dividing 1 by input value
function e() {
  if(document.getElementById('result-display').value > 0 || document.getElementById('result-display').value < 0)
  {
    return document.getElementById('result-display').value *= 2.718281828459;
  }
  else
   {
    return document.getElementById('result-display').value = 2.718281828459;
  }
}
//function for computing log base 10
function log10(){
  document.getElementById('result-display').value = Math.log10(document.getElementById('result-display').value);
}

//function for computing log base 2
function  ln(){
  document.getElementById('result-display').value = Math.log(document.getElementById('result-display').value);
}

//function for computing sine
function  sinx(){
  document.getElementById('result-display').value = Math.sin(document.getElementById('result-display').value);
}
//function for computing cosine
function  cosx(){
  document.getElementById('result-display').value = Math.cos(document.getElementById('result-display').value);
}
//function for computing tangent
function  tanx(){
  document.getElementById('result-display').value = Math.tan(document.getElementById('result-display').value);
}

//funtion for factorial
function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return document.getElementById('result-display').value = num;
}

//clear result
let clearDisplay = () => {
  document.getElementById('result-display').value = '';
}
//function for pi value and calculation
function pi() {
        if(document.getElementById('result-display').value > 0 || document.getElementById('result-display').value < 0)
        {
          return document.getElementById('result-display').value *= 3.1415926536;
        }
        else
         {
          return document.getElementById('result-display').value = 3.1415926536;
        }
}
//percentage calculation function
let calPer = () => {
  return document.getElementById('result-display').value = document.getElementById('result-display').value/100;
}
//creating a backspace function
let back = () => {
  return document.getElementById('result-display').value = document.getElementById('result-display').value.slice(0,-1);
}
//function for calculating square of input number
function sqr(){
  document.getElementById('result-display').value = Math.pow(document.getElementById('result-display').value,2);
}
//function for calculating cube of input number
function cube(){
  document.getElementById('result-display').value = Math.pow(document.getElementById('result-display').value,3);
}
//function for calculating squareroot of input number
function sqroot() {
  document.getElementById('result-display').value = Math.sqrt(document.getElementById('result-display').value);
}
//function for calculating cuberoot of input number
function cuberoot() {
  document.getElementById('result-display').value = Math.cbrt(document.getElementById('result-display').value);
}
