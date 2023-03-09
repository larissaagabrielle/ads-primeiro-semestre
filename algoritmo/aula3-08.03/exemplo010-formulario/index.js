let nome = document.getElementById('inputNome')
let sobrenome = document.getElementById('inputSobrenome')
let idade = document.getElementById ('inputIdade')
let div = document.getElementById('conteudo')

let btn = document.getElementById('inputBtn')

function escreve() {
    // console.log(`Nome: ${nome} / Sobrenome ${sobrenome} / Idade: ${idade}`); Dessa forma ele não traz o valor inserido, somente a tag
    
    div.innerHTML = `Nome: ${nome.value} <br> Sobrenome: ${sobrenome.value} <br> Idade: ${idade.value} <br>` //Passando a informação da função para o html 
    //Value: pegar o valor inserido
}

//btn.addEventListener('evento', função)
btn.addEventListener('click', escreve) //Vai deixar o botão atento à algum click e com isso chamar a função escreve
