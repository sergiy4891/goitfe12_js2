'use strict'


const numbers = [];
let userInput;
let total = 0;

do {
    userInput = prompt('Введите число');
    if (isNaN(userInput)) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        numbers.push(Number(userInput));
    } 
} while(userInput !== null);

for(let i = 0; i < numbers.length-1; i++) {
    total = total + numbers[i];
}
alert(`Общая сумма чисел равна ${total}`);



