const courrentNumber = document.querySelector('.currNumber');
const previousNumber = document.querySelector('.prevNumber p');
const mathSign = document.querySelector('.mathSign');
const numbersButtons = document.querySelectorAll('.number')
const operatorsButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equ');
const clearButton = document.querySelector('.clr');
const calculatorHistory = document.querySelector('.hist');
const historyBtn = document.querySelector('.hist-btn');

let result = ''

function displayNumbers(){

    if(this.textContent === '.' && courrentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && courrentNumber.innerHTML === '') 
    return courrentNumber.innerHTML = '.0'

     
   
    courrentNumber.innerHTML +=this.textContent;
    
}


function operate(){

    if (courrentNumber.innerHTML =='' && this.textContent !='-') return;
    else{
    courrentNumber.innerHTML +=this.textContent;
    }

    if(mathSign.innerHTML !==''){
        showResults()
    }

    previousNumber.innerHTML += courrentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    courrentNumber.innerHTML ='';

}

function showResults(){

    let a = Number(courrentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator){
        case '+':
            result = a+b;
            break;
    }
    courrentNumber.innerHTML = result;
}

function clearScreen(){

    courrentNumber.innerHTML ='';
    previousNumber.innerHTML =''
    mathSign.innerHTML='';

}

function clearHistory(){
   
}

//nasluchiwanie przyciskow

operatorsButtons.forEach((button)=> button.addEventListener('click',operate));
equalsButton.addEventListener('click',showResults);
clearButton.addEventListener('click',clearScreen);
numbersButtons.forEach((button)=> {
button.addEventListener('click',displayNumbers)});
historyBtn.addEventListener('click',clearHistory);