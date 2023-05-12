const courrentNumber = document.querySelector('.currNumber');
const previousNumber = document.querySelector('.prevNumber p');
const mathSign = document.querySelector('.mathSign');
const numbersButtons = document.querySelectorAll('.number')
const operatorsButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equ');
const clearButton = document.querySelector('.clr');
const calculatorHistory = document.querySelector('.hist');
const historyBtn = document.querySelector('.hist-btn');

let resoult = ''

function displayNumbers(){

    if(this.textContent === '.' && courrentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && courrentNumber.innerHTML === '')
courrentNumber.innerHTML = '.0'
    
    courrentNumber.innerHTML +=this.textContent;
}


function operate(){

}

function showResoults(){

}

function clearScreen(){

}

function clearHistory(){

}

//nasluchiwanie przyciskow

operatorsButtons.forEach((button)=> button.addEventListener('click',operate));
equalsButton.addEventListener('click',showResoults);
clearButton.addEventListener('click',clearScreen);
numbersButtons.forEach((button)=> {
    button.addEventListener('click',displayNumbers)});
historyBtn.addEventListener('click',clearHistory);