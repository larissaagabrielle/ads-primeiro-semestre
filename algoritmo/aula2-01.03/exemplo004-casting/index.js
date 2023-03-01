let numero1 = prompt('Digite um número qualquer: ')
let numero2 = prompt('Digite um número qualquer: ')

let soma = numero1 + numero2

console.log(soma)
//Será impresso numero1numero2 ao invés de somar, pois são tipos string e há uma concatenação, ele apenas junta. Para as outras operações matemáticas,funciona
//Toda informação vinda de formulario é lido como string. Para transformar em outro dado, é usado o CASTING 

//CASTING - Usado somente para soma, pois o mesmo símbolo de concatenação é o da soma 
numero1 = parseInt(numero1)
numero2 = parseInt(numero2) //transforma a string em number

soma = numero1 + numero2
console.log (soma)
