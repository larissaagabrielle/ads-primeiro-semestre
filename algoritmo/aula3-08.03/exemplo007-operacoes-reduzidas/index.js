// //Declarar uma variável valendo 7, e somar 3
let num = 7;
num = num + 3; //A var vai receber o seu valor e adicionar mais 3
console.log(num);

// //Com as OPERAÇÕES REDUZIDAS podemos fazer da seguinte forma:
let num2 = 7;
num2+= 3
console.log(num2);

// //Forma do professor:

// //ADIÇÃO
let num3 = prompt("Digite um numero: ");
let num4 = prompt("Digite outro número: ");

num3 = parseFloat(num3);
num4 = parseFloat(num4);

console.log(`O primeiro nº é ${num3}, o segundo nº é ${num4}`);
document.write(`O primeiro nº é ${num3}, o segundo nº é ${num4} <br>`);

num3 += num4;

console.log(`A soma deles é ${num3}`);
document.write(`A soma deles é ${num3}`);

//SUBTRAÇÃO
let num5 = prompt("Digite um numero: ");
let num6 = prompt("Digite outro número: ");

num5 = parseFloat(num5);
num6 = parseFloat(num6);

console.log(`O primeiro nº é ${num5}, o segundo nº é ${num6}`);
document.write(`O primeiro nº é ${num5}, o segundo nº é ${num6} <br>`);

num5 -= num6;

console.log(`A subtração deles é ${num5}`);
document.write(`A subtração deles é ${num5}`);
