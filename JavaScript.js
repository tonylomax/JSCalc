 let currentInput = document.getElementById("input")

let operandOne = 0  
let operandTwo = 0




/*function sum(operandOne,operator, operandTwo){
    if operator = times {

    }
    
}*/



var Num1 = document.getElementById('Num1');
var Num2 = document.getElementById('Num2');
var Num3 = document.getElementById('Num3');
var Num4 = document.getElementById('Num4');
var Num5 = document.getElementById('Num5');
var Num6 = document.getElementById('Num6');
var Num7 = document.getElementById('Num7');
var Num8 = document.getElementById('Num8');
var Num9 = document.getElementById('Num9');
var clear = document.getElementById('clear');
var divide = document.getElementById('divide');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var times = document.getElementById('times');
var decimal = document.getElementById('decimal');



clear.addEventListener('click', function() {currentInput.textContent = 0; 
     sumConstantOne = 0; sumConstantTwo = 0; }, false)



function numButton(num) {
    if (currentInput.textContent == 0) 
        {currentInput.textContent = num}
    else if (currentInput.textContent != 0) 
        {currentInput.textContent += num}
    }    

 //if there isn't a decimal somewhere in it, add it.iF IT IS, ignore it.   




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
decimal.addEventListener('click', function point() {
    if (!currentInput.innerHTML.includes('.')) {
        currentInput.textContent += '.'}}, false);

        

function sum(a,b){
    
}


function wellNamedFunction() {
    if (currentInput.textContent == 0) {


    }
}



