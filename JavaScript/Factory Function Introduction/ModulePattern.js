// Module creation

const calculator = (() => {
    const add = (a,b) => a + b;
    const subtract = (a,b) => a - b;
    const multiply = (a,b) => a * b;
    const divide = (a,b) => a / b;

    return {
        add,
        subtract,
        divide,
        multiply
    };
}) ();

const sum = calculator.add(3,5)
const result = calculator.subtract(6,2)
const product = calculator.multiply(5,5)

console.log({sum, result, product})