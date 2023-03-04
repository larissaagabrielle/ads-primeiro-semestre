let num1 = prompt('Adicione o 1º número: ');
let num2 = prompt('Adicione o 2º número: ');

num1 = parseFloat(num1);
num2 = parseFloat(num2);

console.log (`Os números digitados foram ${num1} e ${num2}`);

console.log(`A soma dos números ${num1} e ${num2} é ${num1 + num2}`);

console.log(`A subtração dos números ${num1} e ${num2} é ${num1 - num2}`);

console.log(`A multiplicação dos números ${num1} e ${num2} é ${num1 * num2}`);

console.log(`A divisão dos números ${num1} e ${num2} é ${num1 / num2}`);

console.log(`A média dos números ${num1} e ${num2} é ${num1 + num2 / 2}`);

//------------------------------------------------

document.write(`Os números digitados foram ${num1} e ${num2}<br>`);

document.write(`A soma dos números ${num1} e ${num2} é ${num1 + num2}<br>`);

document.write(`A subtração dos números ${num1} e ${num2} é ${num1 - num2}<br>`);

document.write(`A multiplicação dos números ${num1} e ${num2} é ${num1 * num2}<br>`);

document.write(`A divisão dos números ${num1} e ${num2} é ${num1 / num2}<br>`);

document.write(`A média dos números ${num1} e ${num2} é ${(num1 + num2) / 2}<br>`);