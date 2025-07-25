const calculatorDisplay = document.querySelector('h1');
const inputButtons  = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number){
    //if the display is 0, replace it with the clicked number if not append the number
    const displayValue = calculatorDisplay.textContent;
      calculatorDisplay.textContent === "0"
        ? number
        : calculatorDisplay.textContent + number;
}
//Adding decimal function 
function addDcimal(){
    if(!calculatorDisplay.textContent.includes('.')){
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

//Adding event listeners for numbers, operators and decimal buttons
inputButtons.forEach((inputBtn) => {
    if(inputBtn.classList.length === 0){
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    }else if(inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    }else if(inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', () => addDcimal());
    }
});


//reset display
function resetAll(){
    calculatorDisplay.textContent = '0';
}
//event listener for clear button
clearBtn.addEventListener('click', resetAll);