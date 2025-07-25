const calculatorDisplay = document.querySelector('h1');
const inputButtons  = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number){
   //replace current display value if first value is entered
    if(awaitingNextValue){
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    }else{
        //if current display value is 0, replace it, if not add number
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}
//Adding decimal function 
function addDcimal(){
    //if operator pressed, dont add decimal
    if(awaitingNextValue){
        return;
    }
    //if no decimal, add one
    if(!calculatorDisplay.textContent.includes('.')){
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

//use operator function
function useOperator(operator){
    const currentValue = Number(calculatorDisplay.textContent);
    //assing firstValue if no value
    if(!firstValue){
        firstValue = currentValue;
    } else {
        console.log("operatorValue", operatorValue);
    }
    //redy for next value, store operator and reset awaitingNextValue

    operatorValue = operator;
    awaitingNextValue = true;
    console.log("firstValue", firstValue);
    console.log("operator", operatorValue);
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
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
    console.log("resetAll");
}
//event listener for clear button
clearBtn.addEventListener('click', resetAll);