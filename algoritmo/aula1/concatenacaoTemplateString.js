let nome = "Larissa";
let sobrenome = "Silva";
let idade = 26;
let peso = 64.5;

console.log (nome + '-' + sobrenome + '-' + idade + "-" + peso); //Ele não soma o peso com a idade porque tem string na chamada. Para somar, teriam que colocar os dois entre os parentes 
console.log (nome + '-' + sobrenome + '-' + (idade + peso));
console.log (nome, '-', sobrenome, '-', idade, "-", peso);
console.log (`${nome} - ${sobrenome} - ${idade} - ${peso}`) //outra forma de chamar as variaveis  