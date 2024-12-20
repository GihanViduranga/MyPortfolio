$(document).ready(function () {
    let display = $('#display');
    let currentInput = '';
    let operator = '';
    let operand1 = null;

    function updateDisplay(value) {
        display.val(value);
    }

    $('.Number').on('click', function () {
        currentInput += $(this).text();
        updateDisplay(currentInput);
    });

    $('.clearDisplay').on('click', function () {
        currentInput = '';
        operator = '';
        operand1 = null;
        updateDisplay('');
    });

    $('.delete').on('click', function () {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
    });

    $('.Addition, .Subtract, .Multy, .Divide').on('click', function () {
        if (operand1 === null) {
            operand1 = parseFloat(currentInput);
            operator = $(this).text();
            currentInput = '';
        } else {
            operand1 = calculateResult();
            operator = $(this).text();
            currentInput = '';
            updateDisplay(operand1);
        }
    });

    $('.equals').on('click', function () {
        if (operator && currentInput) {
            const result = calculateResult();
            updateDisplay(result);
            operand1 = null;
            currentInput = result.toString();
        }
    });

    $('.Dot').on('click', function () {
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay(currentInput);
        }
    });

    function calculateResult() {
        const operand2 = parseFloat(currentInput);
        let result;

        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '×':
                result = operand1 * operand2;
                break;
            case '÷':
                result = operand1 / operand2;
                break;
            default:
                result = operand2;
                break;
        }

        return result;
    }
});