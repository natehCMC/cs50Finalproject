// Get references to elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        
        if (buttonText === '=') {
            try {
                display.value = evaluateExpression(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonText === 'C') {
            clearDisplay();
        } else if (buttonText === 'M+') {
            addToMemory(display.value);
        } else if (buttonText === 'M-') {
            subtractFromMemory(display.value);
        } else if (buttonText === 'MR') {
            display.value = getMemory();
        } else if (buttonText === 'MC') {
            clearMemory();
        } else if (buttonText === 'sin') {
            performTrigonometric('sin');
        } else if (buttonText === 'cos') {
            performTrigonometric('cos');
        } else if (buttonText === 'tan') {
            performTrigonometric('tan');
        } else if (buttonText === 'log') {
            performLogarithm();
        } else if (buttonText === 'sqrt') {
            performSquareRoot();
        } else {
            addToDisplay(buttonText);
        }
    });
});

// Evaluate mathematical expressions
function evaluateExpression(expression) {
    return eval(expression);
}

// Add text to the display
function addToDisplay(text) {
    display.value += text;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Memory operations
let memoryValue = 0;

function addToMemory(value) {
    memoryValue += parseFloat(value);
}

function subtractFromMemory(value) {
    memoryValue -= parseFloat(value);
}

function getMemory() {
    return memoryValue.toString();
}

function clearMemory() {
    memoryValue = 0;
}

// Perform trigonometric operations
function performTrigonometric(operation) {
    const angle = parseFloat(display.value);
    if (!isNaN(angle)) {
        const radians = (Math.PI / 180) * angle;
        switch (operation) {
            case 'sin':
                display.value = Math.sin(radians).toString();
                break;
            case 'cos':
                display.value = Math.cos(radians).toString();
                break;
            case 'tan':
                display.value = Math.tan(radians).toString();
                break;
        }
    } else {
        display.value = 'Error';
    }
}

// Perform logarithm
function performLogarithm() {
    const number = parseFloat(display.value);
    if (number > 0) {
        display.value = Math.log10(number).toString();
    } else {
        display.value = 'Error';
    }
}

// Perform square root
function performSquareRoot() {
    const number = parseFloat(display.value);
    if (number >= 0) {
        display.value = Math.sqrt(number).toString();
    } else {
        display.value = 'Error';
    }
}
