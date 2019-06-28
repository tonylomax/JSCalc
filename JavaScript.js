let currentInput = document.getElementById("input")
let operandOne = 0
let operandTwo = 0
let operator = 0
let Num1 = document.getElementById('Num1');
let Num2 = document.getElementById('Num2');
let Num3 = document.getElementById('Num3');
let Num4 = document.getElementById('Num4');
let Num5 = document.getElementById('Num5');
let Num6 = document.getElementById('Num6');
let Num7 = document.getElementById('Num7');
let Num8 = document.getElementById('Num8');
let Num9 = document.getElementById('Num9');
let clear = document.getElementById('clear');
let divide = document.getElementById('divide');
let equals = document.getElementById('equals');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let times = document.getElementById('times');
let decimal = document.getElementById('decimal');
let calucation = document.getElementById('sum');
let symbols = ["+","-","*","/"];


function sum(op){
   let calcArray = calucation.textContent.split("")
  
    if((symbols.some(symbol => calcArray.indexOf(symbol) == calcArray.length -1)))  {
        calucation.textContent = (operandOne)
    }

    else { operandOne = currentInput.textContent;
        calucation.textContent = operandOne;
        currentInput.textContent = 0;}



    if (op == "+") {
        operator = 1;
        calucation.textContent += "+" 
    }

    else if (op == "-" && operandOne == 0) {
        currentInput.textContent = "-"
    }

    else if (op == "-") {
        operator = 2
        calucation.textContent += "-" 
    }
    
    else if (op == "*") {
        operator = 3
        calucation.textContent += "*" 
    }

    else if (op == "/") {
        operator = 4
        calucation.textContent += "/" 
    }

    if (calucation.textContent !== 0) {
        calucation.style.color = 'black'
    }  


}





function answer(operator) {
    operandTwo = currentInput.textContent
    calucation.textContent += operandTwo

    if (operator == 1) {
        currentInput.textContent = Math.round( (parseFloat(operandOne) + parseFloat(operandTwo)) * 10000 ) / 10000
    }
    else if (operator == 2) {
        currentInput.textContent = Math.round( (parseFloat(operandOne) - parseFloat(operandTwo))  * 10000) / 10000
    }
    else if (operator == 3) {
        currentInput.textContent = Math.round( (parseFloat(operandOne) * parseFloat(operandTwo))  * 1000) /1000
    }

    else if (operator == 4) {
        currentInput.textContent = Math.round( (parseFloat(operandOne) / parseFloat(operandTwo))  * 10000) /10000
    }
    operator = 0; operandOne = 0; operandTwo = 0;

    if (calucation.textContent !== 0) {
        calucation.style.color = 'black'
    }  
}   


function numButton(num) {
     if (currentInput.textContent != 0 || currentInput.textContent.includes(".")) 
        {currentInput.textContent += num}
     else if (currentInput.textContent == 0) 
        {currentInput.textContent = num}   
    }    


Num1.addEventListener('click', () => { numButton(1)}, false);
Num2.addEventListener('click', () => { numButton(2)}, false);
Num3.addEventListener('click', () => { numButton(3)}, false);
Num4.addEventListener('click', () => { numButton(4)}, false);
Num5.addEventListener('click', () => { numButton(5)}, false);
Num6.addEventListener('click', () => { numButton(6)}, false);
Num7.addEventListener('click', () => { numButton(7)}, false);
Num8.addEventListener('click', () => { numButton(8)}, false);
Num9.addEventListener('click', () => { numButton(9)}, false);
Num0.addEventListener('click', () => { numButton(0)}, false);
plus.addEventListener('click', () => { sum('+')}, false);
minus.addEventListener('click', () => { sum("-")}, false);
times.addEventListener('click', () => { sum('*')}, false);
divide.addEventListener('click', () => { sum('/')}, false);
equals.addEventListener('click', () => { answer(operator)}, false);

    


decimal.addEventListener('click', function point() {
    if (!currentInput.innerHTML.includes('.')) {
        currentInput.textContent += '.'}}, false);

if (calucation.textContent == 0) {
    calucation.style.color = 'white'
}  
        

clear.addEventListener('click', function() {currentInput.textContent = 0; 
           calucation.textContent = 0; operandOne = 0; operandTwo = 0; operator = null; calucation.style.color = 'white'
        }, false)
       
      