let num1 = prompt('Adicione o 1º número: ');
let num2 = prompt('Adicione o 2º número: ');
let num3 = prompt('Adicione o 3º número: ');
let num4 = prompt('Adicione o 4º número: ');
let num5 = prompt('Adicione o 5º número: ');

num1 = parseFloat(num1)
num2 = parseFloat(num2)
num3 = parseFloat(num3)
num4 = parseFloat(num4)
num5 = parseFloat(num5)

soma = num1 + num2 + num3 + num4 + num5

console.log(soma);
document.write(`Os números digitados foram, ${num1}, ${num2}, ${num3}, ${num4}, ${num5} e sua soma é ${soma}`)