let num = prompt ('Digite um número: ')

num = parseFloat(num)

//POTÊNCIA
console.log(`Potência: ${Math.pow(num, 2)}`);
console.log(`Potência: ${Math.pow(num, 3)}`);
console.log(`Potência: ${Math.pow(num, 4)}`);

//RAIZ QUADRADA 
console.log(`Raiz quadrada: ${Math.sqrt(num)}`);

//RAIZ CÚBICA 
console.log(`Raiz cúbica: ${Math.cbrt(num)}`);

//VALOR DE PI
console.log(`Valor de PI: ${Math.PI}`);

//FIXAR AS CASAS DECIMAIS - TO FIXED
console.log(`Raiz cúbica: ${Math.cbrt(num).toFixed(2)}`);

//BROSEW
document.write(`Potência: ${Math.pow(num, 2)}<br>`);
document.write(`Potência: ${Math.pow(num, 3)}<br>`);
document.write(`Potência: ${Math.pow(num, 4)}<br>`);
document.write(`Raiz quadrada: ${Math.sqrt(num)}<br>`);
document.write(`Raiz cúbica: ${Math.cbrt(num)}<br>`);
document.write(`Valor de PI: ${Math.PI}<br>`);
document.write(`Raiz cúbica fixando casas decimais: ${Math.cbrt(num).toFixed(2)}<br>`);