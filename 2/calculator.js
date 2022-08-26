let display = (val) => {
  document.getElementById('result-display').value += val;
  return val;
}
let solve = () => {
  let x = document.getElementById('result-display').value;
  let y = eval(x);
  document.getElementById('result-display').value = y;
  return y;
}

function disable()
{
 document.onkeydown = function (e) 
 {
  return false;
 }
}

function divideByOne() {
  return document.getElementById('result-display').value =  1/document.getElementById('result-display').value;
}

let clearDisplay = () => {
  document.getElementById('result-display').value = '';
}

let pi = () => {
      return document.getElementById('result-display').value += 3.1415926536;
    }
let calPer = () => {
  return document.getElementById('result-display').value = document.getElementById('result-display').value/100;
}

let back = () => {
  return document.getElementById('result-display').value = document.getElementById('result-display').value.slice(0,-1);
}

function sqr(){
  document.getElementById('result-display').value = Math.pow(document.getElementById('result-display').value,2);
}

function sqroot() {
  document.getElementById('result-display').value = Math.sqrt(document.getElementById('result-display').value);
}
