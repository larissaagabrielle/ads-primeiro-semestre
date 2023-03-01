let num1 = prompt('Digite um número: ');
let num2 = prompt ('Digite outro número: ');

num1 = parseFloat(num1)
num2 = parseFloat(num2)

console.log(`soma: ${num1 + num2}`);
console.log(`subtração: ${num1 - num2}`);
console.log(`multiplicação: ${num1 * num2}`);
console.log(`divisão: ${num1 / num2}`);
console.log(`módulo: ${num1 % num2}`);

document.write(`soma: ${num1 + num2}<br>`);
document.write(`subtração: ${num1 - num2}<br>`);
document.write(`multiplicação: ${num1 * num2}<br>`);
document.write(`divisão: ${num1 / num2}<br>`);
document.write(`módulo: ${num1 % num2}<br>`);