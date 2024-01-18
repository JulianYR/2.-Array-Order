const add = document.getElementById('add').addEventListener('click', addToArray);
const organize = document.getElementById('organize').addEventListener('click', organizeArray);
const result = document.getElementById('result');

let numbers = [];

function addToArray() {
    const inputNumber = document.getElementById('inputNumber').value;
    const parsedNumber = parseInt(inputNumber);

    if (isNaN(parsedNumber)) {
        alert('Ingrese un número válido');
    } 
    else {
        numbers.push(parsedNumber);
        console.log(numbers);
    }

    document.getElementById('inputNumber').value = '';
}

function isEven(number) {
    return number % 2 === 0;
}

function organizeArray() {

    const evenNumbers = numbers.filter(isEven);

    const oddNumbers = numbers.filter(numero => !isEven(numero));

    numbers = evenNumbers;

    result.innerHTML = evenNumbers.join(', '); 
}
