let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function setOperation(op) {
    if (currentInput === '') return;
    if (firstOperand !== '') calculate();
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || firstOperand === '') return;
    secondOperand = currentInput;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    updateDisplay(result);
    currentInput = result;
    operator = '';
    firstOperand = '';
    secondOperand = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    updateDisplay('0');
}

function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}

// Initially display 0
updateDisplay('0');
