let display = (val) => {
  document.getElementById('result-display').innerHTML += val;
  return val;
}
let solve = () => {
  let x = document.getElementById('result-display').innerHTML;
  let y = eval(x);
  document.getElementById('result-display').innerHTML = y;
  return y;
}

function divideByOne() {
  return document.getElementById('result-display').innerHTML =  1/document.getElementById('result-display').innerHTML;
}

let clearDisplay = () => {
  document.getElementById('result-display').innerHTML = '';
}

let pi = () => {
      return document.getElementById('result-display').innerHTML += 3.1415926536;
    }
let calPer = () => {
  return document.getElementById('result-display').innerHTML = document.getElementById('result-display').innerHTML/100;
}

let back = () => {
  return document.getElementById('result-display').innerHTML = document.getElementById('result-display').innerHTML.slice(0,-1);
}

function sqr(){
  document.getElementById('result-display').innerHTML = Math.pow(document.getElementById('result-display').innerHTML,2);
}

function sqroot() {
  document.getElementById('result-display').innerHTML = Math.sqrt(document.getElementById('result-display').innerHTML);
}
